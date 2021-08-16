console.log(__filename);
console.log(__dirname);

const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        //Send an HTTP request
        console.log(message) 
    
        //Raise event
        this.emit('messageLogged', {id: 1, url: "https://"}); 
    
    }
}

/* Code from before Logger was a class: */
function log(message) {
    //Send an HTTP request
    console.log(message) 

    //Raise event
    emitter.emit('messageLogged', {id: 1, url: "https://"}); 

}

/* Everything within this file is private.
For another file, or, "Module", to see it, we 
must export the variable/function. */

module.exports = Logger; //Exports class.
// module.export = log; //Exports module.

/* This export exports the whole module as an object (?)
To just export the log function use: module.exports = log;.
Then to use the function:
const log = require('./logger');
log('Using the log method'); */

// Keep this private: module.exports.endPoint = url;