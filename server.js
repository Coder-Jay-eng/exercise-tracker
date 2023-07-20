const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');

// environment variable
require('dotenv').config();

// express server
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// starts server
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
