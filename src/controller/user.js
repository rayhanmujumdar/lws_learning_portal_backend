const { registerService, loginService ,getUsersService} = require("../services/user.js");
const error = require("../utils/error.js");
const jwtToken = require("../utils/jwtToken.js");
//register route controller
exports.registerController = async (req, res, next) => {
  try {
    const userInfo = req.body || {};
    const user = (await registerService(userInfo)) || {};
    user.password = null;
    const accessToken = await jwtToken({
      name: user.name,
      email: user.email,
      role: user.role,
    });
    res.status(201).json({ user, accessToken });
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

// login route controller
exports.loginController = async (req, res, next) => {
  try {
    const userInfo = req.body || {};
    const user = await loginService(userInfo);
    if (!user) throw error(404, "User not found");
    const accessToken = await jwtToken({
      name: user.name,
      email: user.email,
      role: user.role,
    });
    res.status(200).json({ user, accessToken });
  } catch (err) {
    next(err);
  }
};

// get all user route controller
exports.getUsersController = async (req, res, next) => {
  try {
    const query = req.query;
    const users = await getUsersService(query);
    if (!users) throw error(404, "User not found");
    res.status(200).json(users);
  } catch (err) {
    console.log(err)
    next(err);
  }
};
