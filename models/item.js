const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItemSchema = Schema({
  name: String,
  value: Number,
  date_init: {
    type: Date,
    default: Date.now(),
  },
  date_expire: {
    type: Date,
    default: Date.now(),
  },
  account: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: "Accounts",
  },
  active: {
    type: Boolean,
    default: true,
  },
  description: String,
});

const Items = mongoose.model('Items', ItemSchema);

module.exports = { Items }
