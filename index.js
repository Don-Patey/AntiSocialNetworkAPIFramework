const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3020;

//implementing routes
app.use('api/users', userRoutes);
app.use('api/thoughts', thoughtRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


