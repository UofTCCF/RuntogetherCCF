const path = require("path");

require("dotenv").config();

const mongoose = require("mongoose");
const { GridFSBucket } = require('mongodb');
const { User } = require("../models/user.model");

let gridfsBucket;

const mongoURI = process.env.ATLAS_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successfully.");
  gridfsBucket = new GridFSBucket(mongoose.connection.db, {
    bucketName: 'profilePics'
  });
});

const getGridfsBucket = () => gridfsBucket;

module.exports = { mongoose, getGridfsBucket };
