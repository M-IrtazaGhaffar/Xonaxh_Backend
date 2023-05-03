const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var reportform = new mongoose.Schema({
  marketerid: {
    type: String,
    required: true,
    index: true,
  },
  report: {
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
module.exports = mongoose.model("reportform", reportform);
