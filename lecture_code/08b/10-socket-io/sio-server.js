
// For socket we will need both express and http
var express = require("express");
var http = require("http");
// Creat an express app
var app = express();
// Create a server based on the express app
// The reason we do this is because we need the server to work with socket.io
var server = http.createServer(app).listen(3000);
// Invoke socket by sending it the server
var io = require("socket.io")(server);


// Use express static middleware to server static files
app.use(express.static("./public"));

// Listen for an incoming connection
// On connection, fire the callback function
// The included events will then be attached to the client
io.on("connection", function(socket) {

    // When a chat event occurs from a client socket
    // DO this
    socket.on("chat", function(message) {
        // Broadcast to all sockets the message
    	socket.broadcast.emit("message", message);
    });

    // As soon as a client connects, emit a message
	socket.emit("message", "Welcome to Cyber Chat");

});

// Let us know its working
console.log("Starting Socket App - http://localhost:3000");
