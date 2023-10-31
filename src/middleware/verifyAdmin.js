const error = require("../utils/error.js");

const verifyAdmin = function (req, _res, next) {
  try {
    const { role } = req.decoded || {};
    const isAdmin = role === "admin";
    if (!isAdmin) throw error(403, "Admin can do only access");
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = verifyAdmin;
