const express = require('express');
const app = express();
const apiRouter = require('./routes/apiRouter');
const dbConnection = require('./db/connection'); // important - although the variable dbConnection isn't used in this file, it's creating the connection to our database
const cors = require('cors')
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/addressbook/v1/', apiRouter); // this is our base-url - it's good to use versioning (the v1 at the end). The code means that a request coming in via the base url will get sent through to the apiRouter


module.exports = app;