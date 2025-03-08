const { get } = require("mongoose");
const { User } = require("../models/user.model");
const { mongoose } = require("../db/mongoose");

const createUser = async (UserInfo) => {
  // Checks if a user exists already
  const currUser = await User.findOne({ id: UserInfo.id });

  if (currUser !== null) {
    throw "User already exists";
  }

  const user = new User(UserInfo);

  user.save();

  return user;
};

const getAllUsers = () => {
  return User.find();
};

const getUser = (id) => {
  return User.findOne({ id: id });
};

const deleteUser = (id) => {
  return User.findOneAndDelete({ id: id });
};

const deleteUsers = (ids) => {
  return User.deleteMany(ids ? { ids: ids } : {});
};

const updateVisionOrPosition = async (
  id,
  visionName,
  visionLink,
  reflectionQuestionsLink,
  positions,
  status
) => {
  const user = await User.findOne({ id: id });

  // Checks if a user exists
  if (user === null) {
    throw "User not found";
  }

  user.visionName = visionName;
  user.visionLink = visionLink;
  user.reflectionQuestionsLink = reflectionQuestionsLink;
  user.positions = positions;
  user.status = status;

  user.save();
  return user;
};

const updateGeneralInfo = async (
  id,
  program,
  year,
  church,
  yearInChurch,
  yearsFollowingChrist,
  yearsInCCF
) => {
  const user = await User.findOne({ id: id });

  // Checks if a user exists
  if (user === null) {
    throw "User not found";
  }

  user.year = year;
  user.program = program;
  user.church = church;
  user.yearInChurch = yearInChurch;
  user.yearsFollowingChrist = yearsFollowingChrist;
  user.yearsInCCF = yearsInCCF;

  user.save();
  return user;
};

const uploadNominationLink = async (id, nominationLink) => {
  const user = await User.findOne({ id: id });

  // Checks if a user exists
  if (user === null) {
    throw "User not found";
  }

  user.nominationLink = nominationLink;
  user.save();
  return user;
};

const updateNominations = async (id, nominator, nomination, nominatorID, nominationType) => {
  const user = await User.findOne({ id: id });

  // Checks if a user exists
  if (user === null) {
    throw "User not found";
  }

  // Finds correct nomination
  for (let i = 0; i < user.nominations.length; i++) {
    if (user.nominations[i].nominatorID === nominatorID) {
      user.nominations[i].nomination = nomination;
      user.nominations[i].nominationType = nominationType;
      user.save();
      return user;
    }
  }

  // If no nomination is found, create a new one
  const newNomination = {
    nominator: nominator,
    nomination: nomination,
    nominatorID: nominatorID,
    nominationType: nominationType,
  };
  console.log(newNomination)

  user.nominations.push(newNomination);
  user.save();
  return user;
};

const updateProfilePic = async (
  userId,
  profilePicId
) => {
  const user = await User.findOne({ id: userId });

  // Checks if a user exists
  if (user === null) {
    throw "User not found";
  }

  console.log(`Updating profile picture for user ${userId} to ${profilePicId}`);

  // Delete old profile picture if it exists
  if (user.profilePic) {
    try {
      await mongoose.connection.db.collection('profilePics.files')
        .deleteOne({ _id: new mongoose.Types.ObjectId(user.profilePic) });
      await mongoose.connection.db.collection('profilePics.chunks')
        .deleteMany({ files_id: new mongoose.Types.ObjectId(user.profilePic) });
      console.log(`Deleted profile picture with ID: ${user.profilePic}`);
    } catch (err) {
      console.error('Error deleting profile picture: ', err);
    }
  }

  // Set new profile picture obj id
  user.profilePic = profilePicId;

  await user.save();

  return user;
};

const updatePicChoice = async (
  userId,
  picChoice
) => {
  const user = await User.findOne({ id:userId });

  // Checks if a user exists
  if (user === null) {
    throw "User not found";
  }

  user.picChoice = picChoice;

  await user.save();

  return user;
};

const getProfilePicId = async (userId) => {
  const user = await User.findOne({ id: userId });

  // Checks if a user exists
  if (user === null) {
    throw "User not found";
  }

  return user.profilePic;
}

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  deleteUsers,
  updateVisionOrPosition,
  uploadNominationLink,
  updateNominations,
  updateGeneralInfo,
  updateProfilePic,
  updatePicChoice,
  getProfilePicId,
};
