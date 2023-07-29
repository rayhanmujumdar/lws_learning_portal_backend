const jwt = require('jsonwebtoken')
const verifyToken = function (req, res, next) {
  try {
    const token = req.authorization
  } catch (err) {
    next(err.message);
  }
};

module.exports = verifyToken;
