/* jshint esversion: 6 */

// Bring in the HTTP module
var http = require("http");

// create a server instance
// Every server request will call the included function
// It is our job to figure out what resources the user has requested
// and then serve those resources
var server = http.createServer( function(req, res) {

    res.writeHead(200, {"Content-Type": "text/html"});

    res.end(`
        <!DOCTYPE HTML>
        <html>
            <head>
                <title>HTML Response</title>
            </head>
            <body>
                <h1>Serving HTML Text</h1>
                <p>${req.url}</p>
                <p>${req.method}</p>
            </body>
        </html>
    `);


});

server.listen(3000);

console.log("Server listening on port 3000");


// http://localhost:3000
// http://localhost:3000/css/style.css
