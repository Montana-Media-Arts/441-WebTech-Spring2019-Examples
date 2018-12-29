/* This file will run in the browser, not node */
/* Notice it is called from index.html */
///* Look at * 1 * first */

/* 2 */
// Create a web-socket instance
// To use this instance, we need  to point out where the serer is running
var ws = new WebSocket("ws://localhost:3000");

// When the web socket opens, we want the following to be inoked
ws.onopen = function() {
	setTitle("Connected to Cyber Chat");
};

// When the web socket closes
ws.onclose = function() {
	setTitle("DISCONNECTED");
};

// When we receive a message from the web-socket
ws.onmessage = function(payload) {
	printMessage(payload.data);
};


/* 1 */
// Grab the message from the user's form
document.forms[0].onsubmit = function () {
    var input = document.getElementById('message');
    ws.send(input.value);
    input.value = '';
};

// Set the title of heading 1
function setTitle(title) {
    document.querySelector('h1').innerHTML = title;
}

// Print the message in the dom
function printMessage(message) {
    var p = document.createElement('p');
    p.innerText = message;
    document.querySelector('div.messages').appendChild(p);
}
