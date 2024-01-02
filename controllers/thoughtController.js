const Thought = require('../models/Thought');

const thoughtController = {
    getAllThoughts: async (req, res) => {
      try {
        const thoughts = await Thought.find();
        res.json(thoughts);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },

    getThoughtByID: async (req, res) => {
        try {
            const thought = await Thought.findById(req.params.thoughtId);
            res.json(thought);
        } catch (error) {
            console.log(error);
        res.status(500).json({message: error.message});
        }
    },

    createThought: async (req, res) => {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (error) {
            console.log(error);
        res.status(500).json({message: error.message});
        }
    },

    updateThought: async (req, res) => {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {new: true});
            res.json(thought);
        } catch (error) {
            console.log(error);
        res.status(500).json({message: error.message});
        }
    },

    deleteThought: async (req, res) => {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
            res.json(thought);
        } catch (error) {
            console.log(error);
        res.status(500).json({message: error.message});
        }
    },
};

module.exports = thoughtController;