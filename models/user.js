const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = Schema({
  first_name: String,
  Last_Name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    require: true,
    default: 'User_Role'
  },
  balance: [
    {
      mount: Number,
      date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

const User = mongoose.model('User', UserSchema)

module.exports = { User }
