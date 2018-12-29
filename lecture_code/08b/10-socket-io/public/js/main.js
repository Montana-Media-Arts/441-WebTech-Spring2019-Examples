
// Send a link to where the socket.io instance is running
// In our current case, its a localhost
var socket = io("http://localhost:3000");

// dosconnect event
socket.on("disconnect", function() {
	setTitle("Disconnected");
});

// Connected event
socket.on("connect", function() {
	setTitle("Connected to Cyber Chat");
});

// Message event
socket.on("message", function(message) {
	printMessage(message);
});



/* Same as previous example */
document.forms[0].onsubmit = function () {
    var input = document.getElementById("message");
    printMessage(input.value);

	// Emit a chat event back to the server
    socket.emit("chat", input.value);
    input.value = '';
};

function setTitle(title) {
    document.querySelector("h1").innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement("p");
    p.innerText = message;
    document.querySelector("div.messages").appendChild(p);
}
