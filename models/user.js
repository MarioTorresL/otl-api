const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    require: true,
    default: "User_Role",
  },
  balance: {
    mount: Number,
    date: {
      type: Date,
      default: Date.now(),
    },
  },
});

const Users = mongoose.model("Users", UserSchema);

module.exports = { Users };
