/*

https://nodejs.org/dist/latest-v6.x/docs/api/fs.html

Node.js comes with a built in module for manipulating the file system of the host computer.
 */

var fs = require("fs");

// Synchronously read the contents of the directory ./
var files = fs.readdirSync('.');

console.log(files);
