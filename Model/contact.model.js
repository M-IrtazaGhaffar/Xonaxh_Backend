const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var contactform = new mongoose.Schema({
  marketerid: {
    type: String,
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
    index: true,
  },
  subject: {
    type: String,
    required: true,
    index: true,
  },
  detail: {
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
module.exports = mongoose.model("contactform", contactform);
