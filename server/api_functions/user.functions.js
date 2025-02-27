const { User } = require("../models/user.model");

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

const updateNominations = async (id, nominator, nomination, nominatorID) => {
  const user = await User.findOne({ id: id });

  // Checks if a user exists
  if (user === null) {
    throw "User not found";
  }

  // Finds correct nomination
  for (let i = 0; i < user.nominations.length; i++) {
    if (user.nominations[i].nominatorID === nominatorID) {
      user.nominations[i].nomination = nomination;
      user.save();
      return user;
    }
  }

  // If no nomination is found, create a new one
  const newNomination = {
    nominator: nominator,
    nomination: nomination,
    nominatorID: nominatorID,
  };

  user.nominations.push(newNomination);
  user.save();
  return user;
};

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
};
