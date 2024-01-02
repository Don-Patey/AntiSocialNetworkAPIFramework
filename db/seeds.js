const mongoose = require('mongoose');
const User = require('../models/user');
const Thought = require('../models/Thought');


// Connection to MongoDB
mongoose.connect('mongodb://localhost:27017/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Sample data
const userData = [
  {
    username: 'Gojo_Saturo',
    email: 'toinfinityandbeyond@example.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'Ryomen_Sukuna',
    email: 'Dismantletheword@cleve.com',
    thoughts: [],
    friends: []
  }
];

// Insert sample data into the DB
User.insertMany(userData)
  .then((users) => {
    console.log('Users seeded successfully');
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    // Closing the connection
    mongoose.connection.close();
  });
