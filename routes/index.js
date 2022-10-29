const express = require('expresss');

const notesRouter = require('./notesRouter');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;