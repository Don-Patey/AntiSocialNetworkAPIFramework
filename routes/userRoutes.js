const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

// GET all users
router.get('/', getAllUsers);

// GET a single user by its _id
router.get('/:userId', getUserByID);

// POST to create a new user
router.post('/', createUser);

// PUT to update a user by its _id
router.put('/:userId', updateUser);

// DELETE to remove a user by its _id
router.delete('/:userId', deleteUser);

module.exports = router;
