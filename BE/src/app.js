const express = require('express');
require('./db/mongoose');

const usersRouter = require('./../src/routers/user');
const coursesRouter = require('./../src/routers/course');

const app = express();

app.use(express.json());
app.use(usersRouter);
app.use(coursesRouter);

// Connect to local db
// /Users/Pepochko/mongodb/bin/mongod.exe --dbpath=/Users/Pepochko/mongodb-data

module.exports = app;