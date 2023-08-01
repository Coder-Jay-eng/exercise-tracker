const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// environment variable
require('dotenv').config();

// express server
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

//Database connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

// Require the files
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

//Use the files
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// starts server
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
