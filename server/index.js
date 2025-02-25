const express = require("express");
const app = express();
const rootRouter = require("./routes/index");
const cors = require("cors");
app.use("/api/v1", rootRouter);
app.use(express.json());
app.use(cors());
const port = 3000;

app.post("/", (req, res) => {
  res.send("hello world");
});

app.listen(port);
