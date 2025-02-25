const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");
const authMiddleWare = (req, res, next) => {
  //............
  const authHeaders = req.headers.authorization;
  if (!authHeaders || authHeaders.startsWith("Bearer ")) {
    return res.status(403).json({});
  }
  const token = authHeaders.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.userId) {
      req.userId = decoded.userId;
    }
    next();
  } catch (error) {
    return res.status(403).json({});
  }
};
module.exports = {
  authMiddleWare,
};
