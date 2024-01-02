const express = require('express');
const router = express.Router();
const {getAllUsers, getUserByID, createUser,
updateUser, deleteUser} = require('../controllers/userController');

// GET all routes
router.get('/', getAllUsers);
router.get('/:userId', getUserByID);
router.post('/', createUser);
router.post('/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;