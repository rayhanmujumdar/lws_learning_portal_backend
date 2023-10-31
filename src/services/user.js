const User = require("../models/userSchema.js");

const bcrypt = require("bcrypt");
const error = require("../utils/error.js");

// register controller service
exports.registerService = async (userInfo) => {
  try {
    const saltRounds = 10;
    const myPassword = userInfo?.password;
    const hashPassword = await bcrypt.hash(myPassword, saltRounds);
    const user = new User({
      name: userInfo?.name,
      email: userInfo?.email,
      password: hashPassword,
    });
    const findUser = await User.findOne({ email: userInfo?.email });
    if (findUser) throw error(409, "User already exist");
    return user.save();
  } catch (err) {
    throw error(err.status, err.message);
  }
};

// login controller service
exports.loginService = async (userInfo) => {
  try {
    const { email, password } = userInfo || {};
    // When documents are queried, they are returned as Mongoose Documents by default. With the Mongoose lean() method, the documents are returned as plain objects.
    const { password: hashPassword, ...user } =
      (await User.findOne({ email: email }).lean().select("-__v")) || {};
    const isMatchPassword = await bcrypt.compare(password, hashPassword);
    if (!isMatchPassword) throw error(501, "Password does not match");
    return user;
  } catch (err) {
    throw error(err.status, err.message);
  }
};

// getUsersController service
exports.getUsersService = (query) => {
  const { email } = query || {};
  if (email) {
    return User.findOne({ email }).lean().select({ __v: 0, password: 0 });
  }
  return User.find({}).lean().select({ __v: 0, password: 0 });
};
