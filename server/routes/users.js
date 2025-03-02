const express = require("express");
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
  const positions = req.body.positions;
  const status = req.body.status;

  updateVisionOrPosition(id, visionName, visionLink, positions, status)
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

module.exports = router;
