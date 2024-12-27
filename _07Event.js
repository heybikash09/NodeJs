const fs=require('fs')
const rs=fs.createReadStream('./Boom.txt')
//createReadStream-it is method that create readable stream for reading data from a file it's usefull for big file that it allow read the file in chunks rather than loading the file in memory 
rs.on('open',function()
{
    console.log('The file is open !!')
})


var events = require('events');
var eventEmitter = new events.EventEmitter();
//all event property and methods are an instance of an EventEmitter object to be able to access these properties and method create an EventEmitter
 
//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');