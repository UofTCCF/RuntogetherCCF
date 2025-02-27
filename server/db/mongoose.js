const path = require("path");

require("dotenv").config();

const mongoose = require("mongoose");

const mongoURI = process.env.ATLAS_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully.");
});

module.exports = { mongoose };
