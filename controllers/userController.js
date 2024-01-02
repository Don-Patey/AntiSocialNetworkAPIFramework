const User = require('../models/userModel');

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            console.log(error);
        res.status(500).json({message: error.message});
        }
    },

    getUserByID: async (req, res) => {
        try {
            const user = await User.findById(req.params.userId);
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: error.message});
        }
    },

    createUser: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: error.message});
        }
    },

    updateUser: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true});
            res.json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: error.message});
        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.userId);
            res.json(user);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({message: error.message});
        }
    },
};


module.exports = userController;