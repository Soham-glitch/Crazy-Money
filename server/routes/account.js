const express = require("express");
const route = express.Router;
const { Account } = require("../db");
const router = require("./user");
const { authMiddleWare } = require("../middleware");
const { default: mongoose } = require("mongoose");

router.post("/balance", authMiddleWare, async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });
  if (!account) {
    res.status(411).json({
      message: "forbidden account you are trying to access",
    });
  }
  res.json({
    balance: account.balance,
  });
});
router.get("/transfer", authMiddleWare, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  const { amount, to } = req.body;
  //fetch the account within the transaction
  const account = await Account.findOne({
    userId: req.userId,
  }).session(session);
  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "insufficient balance",
    });
  }
  const toAccount = await Account.findOne({
    userId: to,
  }).session(session);
  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "invalid account address",
    });
  }
  //perform the transfer
  await Account.updateOne(
    {
      userId: req.userId,
    },
    {
      $inc: {
        balance: -amount,
      },
    }
  ).session(session);
  await Account.updateOne(
    {
      userId: to,
    },
    {
      $inc: {
        balance: amount,
      },
    }
  ).session(session);
  //commit the transaction
  await session.commitTransaction();
  res.json({
    message: "transfer successful",
  });
});
module.exports = route;
