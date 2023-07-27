const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
    min: [6, "Your name is very short"],
  },
  email: {
    type: String,
    required: [true, "Email must be required"],
  },
  password: {
    type: String,
    required: [true, "Password must be required"],
    min: [6, "Password must be {VALUE} character"],
  },
  role: {
    type: String,
    enum: ["student", "admin"],
    required: [true, "role must be required"],
  },
});

// email validation
userSchema.path("email").validate(function (v) {
  const regex = /\S+@\S+\.\S+/;
  return String(v).toLowerCase().match(regex);
}, "Email Validation failed");

// password validation
userSchema.path("password").validate(function (value) {
  return String(value)
    .toLowerCase()
    .match(/(?=.*[!@#$%^&*])/);
}, "Password must has at least one special");
const User = model("User", userSchema);

module.exports = User;
