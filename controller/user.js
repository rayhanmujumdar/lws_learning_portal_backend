const { registerService, loginService } = require("../services/user");
const error = require("../utils/error");
const jwtToken = require("../utils/jwtToken");
exports.registerController = async (req, res, next) => {
  try {
    const userInfo = req.body || {};
    const user = (await registerService(userInfo)) || {};
    user.password = null;
    const token = await jwtToken({
      name: user.name,
      email: user.email,
      role: user.role,
    });
    res.status(201).json({ user, token });
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

exports.loginController = async (req, res, next) => {
  try {
    const userInfo = req.body || {};
    const user = await loginService(userInfo);
    if (!user) throw error(404, "User not found");
    const token = await jwtToken({
      name: user.name,
      email: user.email,
      role: user.role,
    });
    res.status(200).json({ user, token });
  } catch (err) {
    next(err);
  }
};
