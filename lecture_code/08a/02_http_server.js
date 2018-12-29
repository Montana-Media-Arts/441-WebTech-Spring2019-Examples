
// Bring in the HTTP module
var http = require("http");

// create a server instance
// Every server request will call the included function
var server = http.createServer( function(req, res) {

    res.writeHead(200, {"Content-Type": "text/plain"});

    res.end("Hello World");


});

// Set server port to 300 when created.
server.listen(3000);

console.log("Server listening on port 3000");


// http://localhost:3000
