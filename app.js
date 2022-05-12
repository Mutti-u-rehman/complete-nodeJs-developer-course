








// console.log(process.argv); 
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
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
    handler: function (argv) {
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

// const argv = yargs(hideBin(process.argv)).argv;
// console.log(argv.ships);

// console.log(yargs.argv); 
// const command = process.argv;

yargs.parse();


// const getNotes = require('./notes.js');
// const msg = getNotes();
// console.log(msg);



const chalk = require('chalk');
const validator =  require('validator');
const { string } = require('yargs');
// console.log(
//     chalk.green.bold(msg), 
//     validator.isEmail('mut@g.com'), 
//     validator.contains('testing', 'ter'),
//     validator.isAfter('29/04/2023', 'new Date()')
//     );

