const mongoose = require('mongoose');
const User = require('../models/user');
const Thought = require('../models/thought');

// Connection to MongoDB
mongoose.connect('mongodb://localhost:27017/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Sample data
const userData = [
  {
    username: 'Monkey_D_Luffy',
    email: 'luffy@strawhats.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'Roronoa_Zoro',
    email: 'zoro@strawhats.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'Nami',
    email: 'nami@strawhats.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'Usopp',
    email: 'usopp@strawhats.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'Saturo_Gojo',
    email: 'gojo@jujutsukaisen.com',
    thoughts: [],
    friends: []
  },
  {
    username: 'Sukuna_Ryoumen',
    email: 'sukuna@jujutsukaisen.com',
    thoughts: [],
    friends: []
  }
];

const thoughtData = [
  {
    thoughtText: 'I will become the Pirate King!',
    username: 'Monkey_D_Luffy'
  },
  {
    thoughtText: 'I want to be the world\'s greatest swordsman.',
    username: 'Roronoa_Zoro'
  },
  {
    thoughtText: 'Navigating the seas and drawing maps is my passion.',
    username: 'Nami'
  },
  {
    thoughtText: 'I\'m a brave warrior of the sea!',
    username: 'Usopp'
  }
];

// Insert sample thoughts into the DB
Thought.insertMany(thoughtData)
  .then((thoughts) => {
    console.log('Thoughts seeded successfully');

    // Update user's thoughts array
    userData[0].thoughts = [thoughts[0]._id, thoughts[1]._id];
    userData[1].thoughts = [thoughts[2]._id];
    userData[2].thoughts = [thoughts[3]._id];

    // Update user's friends array
    userData[0].friends = [userData[1]._id, userData[2]._id, userData[3]._id, userData[4]._id, userData[5]._id];
    userData[1].friends = [userData[0]._id, userData[2]._id, userData[3]._id, userData[4]._id, userData[5]._id];
    userData[2].friends = [userData[0]._id, userData[1]._id, userData[3]._id, userData[4]._id, userData[5]._id];
    userData[3].friends = [userData[0]._id, userData[1]._id, userData[2]._id, userData[4]._id, userData[5]._id];
    userData[4].friends = [userData[0]._id, userData[1]._id, userData[2]._id, userData[3]._id];
    userData[5].friends = [];

    // Insert sample users into the DB
    return User.insertMany(userData);
  })
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
