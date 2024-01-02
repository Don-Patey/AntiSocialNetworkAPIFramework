const User = require('../models/user');
const connectToDatabase = require('../db/db');  
const userController = {
    getAllUsers: async (req, res) => {
        try {
            const db = await connectToDatabase();
            const users = await db.collection('users').find().toArray();
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    getUserByID: async (req, res) => {
        const { userId } = req.params;
        try {
            const db = await connectToDatabase();
            const user = await db.collection('users').findOne({ _id: userId });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    createUser: async (req, res) => {
        const userData = req.body;
        try {
            const db = await connectToDatabase();
            const result = await db.collection('users').insertOne(userData);
            const createdUser = result.ops[0];
            res.status(201).json(createdUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    updateUser: async (req, res) => {
        const { userId } = req.params;
        const updatedData = req.body;
        try {
            const db = await connectToDatabase();
            const result = await db.collection('users').findOneAndUpdate(
                { _id: userId },
                { $set: updatedData },
                { returnDocument: 'after' }
            );
            const updatedUser = result.value;
            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(updatedUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },

    deleteUser: async (req, res) => {
        const { userId } = req.params;
        try {
            const db = await connectToDatabase();
            const result = await db.collection('users').findOneAndDelete({ _id: userId });
            const deletedUser = result.value;
            if (!deletedUser) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(deletedUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
};

module.exports = userController;
