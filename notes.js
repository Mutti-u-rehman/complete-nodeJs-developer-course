
const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return 'Your notes...';
}

const addNote = function(title, body) {
    const notes = loadNotes();
    const duplicateCheck = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicateCheck.length === 0) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
    }
}

const removeNote = function(title) {
    const notes = loadNotes();
    const noteIndex = notes.findIndex(note => note.title === title);

    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
        saveNotes(notes);
        console.log(chalk.bgGreen('Note removed'));
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notesDB.Json', dataJSON);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notesDB.Json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}