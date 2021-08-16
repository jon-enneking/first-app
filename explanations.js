/* This file serves as one file full of the different topics with explanations
since the code is split up in the actual tutorial video. */


/* The require() function is available in Node, but not in browsers.
It takes 1 argument - the name/path of the target module we want to load.
It returns the object/method/variable that is exported from the target module. */

/* Node assumes everything is a js module so we could either use
var logger = request('./logger')  or  var logger = require('./logger.js')
It is best practice to store exports as a constant so that we don't
accidently override the value. */
const logger = require('./logger');

console.log(logger); // This reveals what object we have returned from receive()
logger.log("Logger function from logger module.");
logger.log(logger.url); //Notice that the variabl called url is not imported.
/* There is a tool for js called jshint which will show information about your file.
To run jshint us jshint [filename] in the terminal instead of node [filename]. */


/* Node does not execute imported code directly, it wraps our imported code in a function. */


//PATH
/* Using the require function, Node assumes that the argument
is a built in module -> See Node's API. If it doesn't find a built in module,
Node will then look through your files. */
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);


//OS
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
//console.log('Total Memory: ' + totalMemory);
console.log(`Total Memory: \t${totalMemory}`);
console.log(`Free Memory: \t${freeMemory}`);


// FILE SYSTEM
const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

/* All asynchronous methods require a function as the last input of the method call, 
called a "Call back". This function is what will be executed once the method is complete. */
const afiles = fs.readdir('./', function(err, afiles) {
    if (err) console.log('Error', err);
    else console.log('Result', afiles);
});


//EVENTS
const EventEmitter = require('events'); //This returns a class
const emitter = new EventEmitter(); //Instance of EventEmitter

emitter.emit('messageLogged'); //Produces/Raises an event called messageLogged

//Nothing happens until we have a listener.
//emitter.addListener is the same as emitter.on
emitter.on('messageLogged', function() {
    console.log("Listener called");
});

/* The emit method calls all of the registered listeners synchronously.
That is why Listener only hears this message, not the one above. */
emitter.emit('messageLogged'); 

//EVENTS WITH ARGUMENTS
emitter.on('connectionEstablished', function(arg) {
    /* The line above can also be written as:
emitter.on('connectionEstablished', (arg) => { */
    console.log("New connection established", arg);
    
});

//The second argument is called an event argument object
emitter.emit('connectionEstablished', {id: 1, url: 'http//:'});

//Practice:
emitter.on("logging", (message) => {
    console.log(message);
});

emitter.emit("logging", "Logging message")