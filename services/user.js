const User = require("../models/userSchema");

const bcrypt = require("bcrypt");
const error = require("../utils/error");

exports.registerService = async (userInfo) => {
  try {
    const saltRounds = 10;
    const myPassword = userInfo.password;
    const hashPassword = await bcrypt.hash(myPassword, saltRounds);
    const user = new User({
      name: userInfo.name,
      email: userInfo.email,
      password: hashPassword,
    });
    const findUser = await User.findOne({ email: userInfo?.email });
    if (findUser) throw error(409, "User already exist");
    return user.save();
  } catch (err) {
    throw error(err.status, err.message);
  }
};
