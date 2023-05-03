const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var appealform = new mongoose.Schema({
  marketerid: {
    type: String,
    required: true,
    index: true,
  },
  newNumber: {
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
module.exports = mongoose.model("appealform", appealform);
