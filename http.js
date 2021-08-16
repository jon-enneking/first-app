/* Low Level Version
const http = require('http');
const server = http.createServer();
//Server is an EventEmitter.


server.on('connection', (socket) => { //Can be found in documentation
    console.log('New connection');
}); 

server.listen(3000); //port 3000

console.log('Listening on port 3000...');  ..*/

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.write('Hello World');
        res.end();
    }

    if(req.url == '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000); //port 3000

console.log('Listening on port 3000...'); 

/* To see results:
go to localhost:3000 in browser. To see second if results
go to localhost:3000/api/courses */

/* Building a web server is veyr easy. We wouldn't use this http module
to build a back-end service for our web/mobile applications because this
chunk of code would get very long as we are adding linearly. 
Instead, we would use a framework called "Express". Internally, this
framework is built on top of the http module in Node. */