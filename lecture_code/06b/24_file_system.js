/*

https://nodejs.org/dist/latest-v6.x/docs/api/fs.html

Node.js comes with a built in module for manipulating the file system of the host computer.
 */

var fs = require("fs");

// A-Synchronously read the contents of the directory ./
var files = fs.readdir('.', function(err, files){
        if (err) {
            throw err;
        }

        console.log(files);
});

// notice that this occurs first (asynchronous operation!!!)
// You will notice every command in the "fs module" has synchronous and asynchronous commands
console.log("Reading Files...");
