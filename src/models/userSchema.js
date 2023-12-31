const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    minLength: [6, "Your name is very short,at least 6 character"],
    required: [true, "Name must be required"],
  },
  email: {
    type: String,
    required: [true, "Email must be required"],
  },
  password: {
    type: String,
    required: [true, "Password must be required"],
    minLength: [6, "Password must be {VALUE} character"],
  },
  role: {
    type: String,
    enum: {
      values: ["student", "admin"],
      message: "{VALUE} is not Supported",
    },
    default: "student",
  },
});

// email validation
userSchema.path("email").validate(function (v) {
  const regex = /\S+@\S+\.\S+/;
  return String(v).toLowerCase().match(regex);
}, "This {VALUE} is no valid");

// password validation
userSchema.path("password").validate(function (value) {
  return String(value)
    .toLowerCase()
    .match(/(?=.*[!@#$%^&*])/);
}, "Password must has at least one special");
const User = model("User", userSchema);

module.exports = User;
