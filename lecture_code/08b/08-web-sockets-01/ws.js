
// Import web socket and chain on a serer
var WebSocketServer = require("ws").Server;

// create a new instance with a port of 3000
var wss = new WebSocketServer({ port: 3000 });

// Set up a new listener. This will fire whenever we get a new socket connection
// You can think of Web Socket as a connected end-point. This means that we have one client connection and every client that connects is going to cause this fall back function to fire and then we can edit their individual connection using this WS variable.
wss.on("connection", function(ws) {

	// What we are going to do is send a message back to each connected socket, ws.send, will send a message back to the client, and we will send this message back after they've made a connection.
	ws.send("Welcome to cyber chat");

});
