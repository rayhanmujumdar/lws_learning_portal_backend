const jwt = require("jsonwebtoken");
const error = require("../utils/error");
const verifyToken = function (req, _res, next) {
  try {
    const authorization = req.headers.authorization || "";
    const token = authorization.split(" ")[1];
    if (!token) throw error(403, "forbidden");
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) throw error(403, err.message || "forbidden");
      req.decoded = decoded;
      next();
    });
  } catch (err) {
    next(err);
  }
};

module.exports = verifyToken;
