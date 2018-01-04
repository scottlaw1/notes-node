console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ',command);
console.log('Yargs',argv);

if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if (note){
    console.log('Note created');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Title: ${note.body}`);
  } else {
    console.log('Note title already taken')
  }
} else if (command === 'list'){
  var list = notes.getAll();
  if (list){
    console.log(list);
  } else {
    console.log('No notes written yet.');
  }
} else if (command === 'read'){
  notes.getNote(argv.title);
} else if (command === 'remove'){
  var removed = notes.removeNote(argv.title);
  var message = removed ? 'Note was removed' : 'Note not found';
  console.log(message);
} else{
  console.log('Command not recognized');
}
