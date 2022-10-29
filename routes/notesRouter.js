const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils.js');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
  });
  
// POST Route for a new note
notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
        title,
        text
        };

        readAndAppend(newNote, '../db/db.json');
        res.json(`Tip added successfully 🚀`);
    } else {
        res.error('Error in adding new note');
    }
});

  module.exports = notes;