// create web server with express
const express = require('express');
const app = express();
const port = 3000;
// import cors to allow cross-origin resource sharing
const cors = require('cors');
// import body-parser to parse JSON data
const bodyParser = require('body-parser');
// import mongoose to connect to MongoDB
const mongoose = require('mongoose');
// import routes
const commentsRoutes = express.Router();
// import model
let Comment = require('./models/comments.model');

// connect to MongoDB
mongoose.connect('mongodb://

 