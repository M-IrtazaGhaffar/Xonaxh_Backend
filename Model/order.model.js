const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
    index: true,
  },
  dateOrdered: {
    type: Date,
    default: Date.now,
    required: true,
    index: true,
  },
  orderConfirmation: {
    type: Boolean,
    default: false,
    required: true,
    index: true,
  },
  dateConfirmationOrder: {
    type: String,
    default: "Not confirmed yet",
    index: true,
  },
  dateDelivered: {
    type: String,
    default: "Not delivered yet",
    index: true,
  },
  clothID: {
    type: String,
    required: true,
    index: true,
  },
  clientName: {
    type: String,
    required: true,
    index: true,
  },
  clientNumber: {
    type: Number,
    required: true,
    index: true,
  },
  desc: {
    type: String,
    required: true,
    index: true,
  },
  address: {
    type: String,
    required: true,
    index: true,
  },
  marketerPayment: {
    type: Number,
    required: true,
    index: true,
  },
  marketerPaymentStatus: {
    type: Boolean,
    default: false,
    required: true,
    index: true,
  },
  quantity: {
    type: Number,
    required: true,
    index: true,
  },
  deliveryStatus: {
    type: Boolean,
    default: false,
    required: true,
    index: true,
  },
  marketerid: {
    type: String,
    required: true,
    index: true,
  },
  length: {
    type: String,
    required: true,
    index: true,
  },
  chest: {
    type: String,
    required: true,
    index: true,
  },
  waist: {
    type: String,
    required: true,
    index: true,
  },
  daman: {
    type: String,
    required: true,
    index: true,
  },
  sleeves: {
    type: String,
    required: true,
    index: true,
  },
  shoulders: {
    type: String,
    required: true,
    index: true,
  },
  colloar: {
    type: String,
    required: true,
    index: true,
  },
  armhole: {
    type: String,
    required: true,
    index: true,
  },
});

//Export the model
module.exports = mongoose.model("orders", userSchema);
