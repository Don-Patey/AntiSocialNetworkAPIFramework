const Thought = require('../models/thought');

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
    addReaction: async (req, res) => {
        try {
          // Implement your logic for adding a reaction here
          // This is just a placeholder, replace it with your actual implementation
          res.json({ message: 'Reaction added successfully' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
      },

      deleteReaction: async (req, res) => {
        try {
          const { thoughtId, reactionId } = req.params;
    
          // Find the thought by ID
          const thought = await Thought.findById(thoughtId);
    
          // Check if the thought and reaction exist
          if (!thought || !thought.reactions.includes(reactionId)) {
            return res.status(404).json({ message: 'Thought or Reaction not found' });
          }
    
          // Remove the reaction from the thought's reactions array
          thought.reactions.pull(reactionId);
    
          // Save the updated thought
          await thought.save();
    
          res.json({ message: 'Reaction deleted successfully', thought });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
      },
};

module.exports = thoughtController;
