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