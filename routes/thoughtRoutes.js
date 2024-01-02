const express = require('express');
const router = express.Router();
const {
  getAllThoughts,
  getThoughtByID,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../controllers/thoughtController');

// GET all routes
router.get('/', getAllThoughts);

// GET a single thought by its _id
router.get('/:thoughtId', getThoughtByID);

// POST to create a new thought
router.post('/', createThought);

// PUT to update a thought by its _id
router.put('/:thoughtId', updateThought);

// DELETE to remove a thought by its _id
router.delete('/:thoughtId', deleteThought);

// POST to create a reaction stored in a single thought's reactions array field
router.post('/:thoughtId/reactions', addReaction);

// DELETE to pull and remove a reaction by the reaction's reactionId value
router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;
