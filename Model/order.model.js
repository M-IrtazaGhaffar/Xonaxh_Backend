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
    type: Date,
    default: null,
    index: true,
  },
  dateDelivered: {
    type: Date,
    default: null,
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
  returnDate: {
    type: Date,
    default: null,
    index: true,
  },
  // When will be order delivered to us from customer
  returnDeliveredDate: {
    type: Date,
    default: null,
    index: true,
  },
  returnStatus: {
    type: Boolean,
    default: false,
    required: true,
    index: true,
  },
  returnDeliveredStatus: {
    type: Boolean,
    default: false,
    required: true,
    index: true,
  },
  returnSentBackStatus: {
    type: Boolean,
    default: false,
    required: true,
    index: true,
  },
  // When will be order sent back to customer from us
  returnSentBackDate: {
    type: Date,
    default: null,
    index: true,
  },
  returnDesc: {
    type: String,
    default: "",
    index: true,
  }
});

//Export the model
module.exports = mongoose.model("orders", userSchema);
