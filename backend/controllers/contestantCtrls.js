const db = require("../models");

const getContestant = (req, res) => {
  db.Contestant.find({}).then((foundContestant) => {
    if (!foundContestant) {
      res.status(404).json({ message: "Cannot find Contestant" });
    } else {
      res.status(200).json({ data: foundContestant });
    }
  });
};

const createContestant = (req, res) => {
  db.Contestant.create(req.body).then((createdContestant) => {
    if (!createdContestant) {
      res.status(400).json({ message: "Cannot create contestant" });
    } else {
      res
        .status(201)
        .json({ data: createdContestant, message: "Contestant Created" });
    }
  });
};

const updateContestant = (req, res) => {
  db.Contestant.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (updatedContestant) => {
      if (!updatedContestant) {
        res.status(400).json({ Message: "Could not update contestant" });
      } else {
        res
          .status(200)
          .json({ Data: updatedContestant, Message: "Contestant updated" });
      }
    }
  );
};

const deleteContestant = (req, res) => {
  db.Contestant.findByIdAndDelete(req.params.id).then((deletedContestant) => {
    if (!deleteContestant) {
      res.status(400).json({ Message: "Could not delete contestant" });
    } else {
      res
        .status(200)
        .json({ Data: deletedContestant, Message: "Contestant deleted" });
    }
  });
};

module.exports = {
  getContestant,
  createContestant,
  updateContestant,
  deleteContestant,
};