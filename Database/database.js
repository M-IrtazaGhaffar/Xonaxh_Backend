const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;

const connection = async () => {
  try {
    // Connect MongoDB at default port 27017.
    mongoose.connect(
    process.env.MONGODB_URL
    );
    console.log("MongoDB Connection Succeeded.");
  } catch (error) {
    console.log("Error in DB connection: " + error);
  }
};

module.exports = connection;
