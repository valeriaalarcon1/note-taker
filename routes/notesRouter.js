const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils.js');
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the notes
notes.get('/api/notes', (req, res) => {
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
  });
  
// POST Route for a new note
notes.post('/api/notes', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
        title,
        text,
        note_id: uuidv4(),
        };

        readAndAppend(newNote, '../db/db.json');
        res.json(`Note ("${newNote}") added successfully 🚀`);
    } else {
        res.error('Error in adding new note');
    }
});

  module.exports = notes;