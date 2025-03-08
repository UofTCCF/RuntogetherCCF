const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nominationSchema = new Schema({
  nominator: { type: String, required: true },
  nomination: { type: String, required: true },
  nominatorID: { type: String, required: true },
  nominationType: { type: String, required: true },
});

const userSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  picture: { type: String, required: true },
  positions: { type: [String], default: [] },
  status: {
    type: String,
    enum: ["WAITING", "CONSIDERING", "DECIDED"],
    default: "WAITING",
  },
  nominations: { type: [nominationSchema], required: true, default: [] },
  visionName: { type: String, default: "" },
  visionLink: { type: String, default: "" },
  reflectionQuestionsLink: { type: String, default: "" },
  nominationLink: { type: String },
  program: { type: String, default: "" },
  year: { type: String, default: "First" },
  church: { type: String, default: "" },
  yearInChurch: { type: String, default: "1" },
  yearsFollowingChrist: { type: String, default: "1" },
  yearsInCCF: { type: String, default: "1" },
  profilePic: {
    type: mongoose.Schema.Types.ObjectId, // GridFS file ID
    ref: 'profilePics.files', // Optional if you want to populate file data later
    default: null
  },
  picChoice: {
    type: String,
    enum: ["DEFAULT PICTURE", "CUSTOM PICTURE"],
    default: "DEFAULT PICTURE",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
