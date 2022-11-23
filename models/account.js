const mongoose = require("mongoose");
const { Schema } = mongoose;

const AccountSchema = Schema({
  name: String,
  user: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  description: String,
  total_balance: [
    {
      mount: Number,
      date: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  active: {
    type: Boolean,
    default: true,
  },
});

const Accounts = mongoose.model("Accounts", AccountSchema);

module.exports = { Accounts };
