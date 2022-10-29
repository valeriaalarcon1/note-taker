const express = require('expresss');

const notesRouter = require('./notesRouter');

const app = express();

app.use('/api/notes', notesRouter);

module.exports = app;