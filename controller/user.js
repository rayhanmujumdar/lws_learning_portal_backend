const { registerService } = require("../services/user");
const jwtToken = require("../utils/jwtToken");
exports.registerController = async (req, res, next) => {
  try {
    const userInfo = req.body || {};
    const user = (await registerService(userInfo)) || {};
    const token = await jwtToken({
      name: user.name,
      email: user.email,
      role: user.role,
    });
    res.json({ user, token });
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};
