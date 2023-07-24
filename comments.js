//Create web server
//create web server
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
//const { v4: uuidv4 } = require('uui
