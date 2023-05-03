const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var notifications = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true,
  },
  desc: {
    type: String,
    required: true,
    index: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Export the model
module.exports = mongoose.model("notifications", notifications);
