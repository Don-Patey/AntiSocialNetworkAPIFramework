const mongoose = require('mongoose');
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');

mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, useUnifiedTopology: true
});

const app = express();
const PORT = process.env.PORT || 3020;

// Implementing routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

