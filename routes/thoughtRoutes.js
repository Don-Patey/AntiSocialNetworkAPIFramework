const express = require('express');
const router = express.Router();
const {getAllThoughts, getThoughtByID, createThought, updateThought, deleteThought, addReaction, deleteReaction} = require('../controllers/thoughtController');

// GET all routes
router.get('/', getAllThoughts);
router.get('/:thoughtId', getThoughtByID);
router.post('/', createThought);
router.post('/:thoughtId', updateThought);
router.delete('/:thoughtId', deleteThought);

module.exports = router;