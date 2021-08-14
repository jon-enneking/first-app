console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log';

function log(message) {
    //Send an HTTP request
    console.log(message) 
}

/* Everything within this file is private.
For another file, or, "Module", to see it, we 
must export the variable/function. */
module.exports.log = log;
/* This export exports the whole module as an object (?)
To just export the log function use: module.exports = log;.
Then to use the function:
const log = require('./logger');
log('Using the log method'); */

// Keep this private: module.exports.endPoint = url;