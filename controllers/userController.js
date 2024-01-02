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
};

module.exports = userController;