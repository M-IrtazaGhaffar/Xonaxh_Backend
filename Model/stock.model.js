const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var stock = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  desc: {
    type: String,
    required: true,
    index: true,
  },
  quantity: {
    type: Number,
    required: true,
    index: true,
  },
  price: {
    type: Number,
    required: true,
    index: true,
  },
  marketerpayment: {
    type: Number,
    required: true,
    index: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Export the model
module.exports = mongoose.model("stock", stock);
