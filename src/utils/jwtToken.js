const jwt = require("jsonwebtoken");
const jwtToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET,{ expiresIn: '1d' });
};
module.exports = jwtToken;
