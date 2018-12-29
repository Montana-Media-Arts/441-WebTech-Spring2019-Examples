var socket = io();

socket.on("welcome", function(message){
	console.log(message);
});
