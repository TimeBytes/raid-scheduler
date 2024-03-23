const router = require("express").Router();

const {
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
  getAllUserRaidParty,
  getAllUserCharacter,
} = require("../../controllers/userController");

module.exports = router;
