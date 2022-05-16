
// console.log(process.argv); 
const yargs = require('yargs');
const { hideBin, applyExtends } = require('yargs/helpers');
const notes = require('./notes.js');

// yargs.version('0.0.1');

yargs.command({
    command: 'add',
    describe: 'Adding new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            demandOption: true,
            describe: 'Body option here',
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Title: '+ argv.title, 'Body: '+ argv.body);
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: false,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.listNotes();
    }
})

yargs.parse();


const chalk = require('chalk');
const validator =  require('validator');
// const { string, argv } = require('yargs');
// console.log(string, argv);
// console.log(
//     chalk.green.bold(msg), 
//     validator.isEmail('mut@g.com'), 
//     validator.contains('testing', 'ter'),
//     validator.isAfter('29/04/2023', 'new Date()')
//     );




//---------------------------------      How to use it     ---------------------------------
/**
 * nodemon app.js list
 * node app.js list
 * node app.js add --title="Testing" --body="main content here"
 * node --inspect-brk app.js list (add debugger)
 */