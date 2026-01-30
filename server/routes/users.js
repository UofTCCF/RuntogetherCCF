const express = require("express");
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
// const mongoose = require("mongoose");
const { mongoose, getGridfsBucket } = require("../db/mongoose");

const {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  deleteUsers,
  uploadNominationLink,
  updateNominations,
  updateVisionOrPosition,
  updateGeneralInfo,
  updateProfilePic,
  updatePicChoice,
  getProfilePicId,
} = require("../api_functions/user.functions");

const router = express.Router();

// Creates a new user
router.route("/register").post(async (req, res) => {
  createUser(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Gets all users
router.route("/").get((req, res) => {
  getAllUsers()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Gets a user by google id
router.route("/user/:id").get((req, res) => {
  const id = req.params.id;

  getUser(id)
    .then((result) => {
      if (!result) {
        res.status(404).json("User not found");
        return;
      }

      res.send(result);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Deletes a user by google id
router.route("/user/:id").delete((req, res) => {
  const id = req.params.id;

  deleteUser(id)
    .then((result) => {
      if (!result) {
        res.status(404).json("User not found");
        return;
      }

      res.send(result);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Deletes all users
router.route("/user").delete((req, res) => {
  deleteUsers({})
    .then((result) => {
      if (!result) {
        res.status(404).json("Failed to delete all users");
        return;
      }

      res.send(result);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Adds a vision and position to a user
router.route("/update/:id").post((req, res) => {
  const id = req.params.id;
  const visionName = req.body.visionName;
  const visionLink = req.body.visionLink;
  const reflectionQuestionsLink = req.body.reflectionQuestionsLink;
  const positions = req.body.positions;
  const status = req.body.status;

  updateVisionOrPosition(id, visionName, visionLink, reflectionQuestionsLink, positions, status)
    .then((result) => {
      if (!result) {
        res.status(404).json("User not found");
        return;
      }

      res.send(result);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Adds a nomination link to a user
router.route("/nominationLink/:id").post((req, res) => {
  const id = req.params.id;
  const nominationLink = req.body.nominationLink;

  uploadNominationLink(id, nominationLink)
    .then((result) => {
      if (!result) {
        res.status(404).json("User not found");
        return;
      }

      res.send(result);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Adds a nomination to a user
router.route("/nomination/:id").post((req, res) => {
  const id = req.params.id;
  const nomination = req.body.nomination;
  const nominator = req.body.nominator;
  const nominatorID = req.body.nominatorID;
  const nominationType = req.body.nominationType;

  updateNominations(id, nominator, nomination, nominatorID, nominationType)
    .then((result) => {
      if (!result) {
        res.status(404).json("User not found");
        return;
      }

      res.send(result);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Updates user general info
router.route("/generalInfo/:id").post((req, res) => {
  const id = req.params.id;
  const program = req.body.program;
  const year = req.body.year;
  const church = req.body.church;
  const yearsInChurch = req.body.yearsInChurch;
  const yearsFollowingChrist = req.body.yearsFollowingChrist;
  const yearsInCCF = req.body.yearsInCCF;

  updateGeneralInfo(
    id,
    program,
    year,
    church,
    yearsInChurch,
    yearsFollowingChrist,
    yearsInCCF
  )
    .then((result) => {
      if (!result) {
        res.status(404).json("User not found");
        return;
      }

      res.send(result);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Set up storage engine for GridFS (for profile pics)
const storage = new GridFsStorage({
  url: process.env.ATLAS_URI,
  file: (req, file) => {
    return {
      filename: `profilePic-${Date.now()}-${file.originalname}`,
      bucketName: 'profilePics'
    };
  }
});

const upload = multer({ storage });

// Updates user profile pic
router.route("/pictures/:id").post(upload.single('image'), (req, res) => {
  console.log(req.file);
  const profilePicId = req.file.id;
  const userId = req.params.id;

  updateProfilePic(
    userId,
    profilePicId
  )
    .then((result) => {
      if (!result) {
        res.status(404).json("User not found");
        return;
      }

      res.send(result);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

router.route("/picChoice/:id").post((req, res) => {
  const userId = req.params.id;
  const picChoice = req.body.picChoice;

  updatePicChoice(userId, picChoice)
    .then((result) => {
      if (!result) {
        res.status(404).json("User not found");
        return;
      }

      res.send(result);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Get image by file ID
router.get("/pictures/file/:id", async (req, res) => {
  try {
    let gridfsBucket;
    const maxRetries = 3;
    let attempt = 0;
    while (attempt < maxRetries) {
      try {
        gridfsBucket = getGridfsBucket();
        if (!gridfsBucket) {
          throw new Error('GridFSBucket is not initialized');
        }
        break; // Exit loop if successful
      } catch (error) {
        console.error(`Attempt ${attempt + 1} to get GridFSBucket failed:`, error);
        attempt++;
        if (attempt >= maxRetries) {
          return res.status(500).json('Failed to initialize GridFSBucket after multiple attempts');
        }
        // time out a bit
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }

    const userId = req.params.id;
    const fileId = await getProfilePicId(userId);
    // console.log("file id: " + fileId);

    if (!fileId) {
      return res.status(404).json("Profile picture not found");
    }

    const files = await mongoose.connection.db.collection('profilePics.files').findOne({ _id: new mongoose.Types.ObjectId(fileId) });

    if (!files) {
      return res.status(404).json("File not found");
    }

    res.set('Content-Type', files.contentType);
    const readStream = gridfsBucket.openDownloadStream(files._id);
    readStream.pipe(res);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});

module.exports = router;
