var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function(ws) {

	/* 2 */
	// Add listeners to the web-socket
	// On message, this event handler will be fired
	ws.on("message", function(message) {

		// If exit is requested, then close the connection to the client
		// This does not kill the web-socket server, just the client connection
		if (message === 'exit') {
			ws.close();
		} else {

			// if the client has typed anything else,
			// we want to broadcast that to all of the clients.
			// We can access each client from the wss.clients.
			// wss.clients is an array of clients, so we can use JS forEach
			wss.clients.forEach(function(client) {
				// send the message to each client instance
				client.send(message);
			});

		}

	});

	ws.send("Welcome to cyber chat");

});
