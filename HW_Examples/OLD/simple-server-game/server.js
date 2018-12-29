var express = require("express");
var http = require("http");

var app = express();
var server = http.createServer(app).listen(3000);

var io = require("socket.io")(server);

var num_of_players = 0;
var players_idx = [];
var player_data = {};

//We're using express.middleWare()
app.use(express.static("./public"));


io.on("connection", function(socket) {
    var myIdx = num_of_players;
	var myIdxStr = myIdx.toString();
    num_of_players++;


    console.log("A user connected.");
    socket.emit("welcome", "hello, from the server.");
    socket.emit("player_num", myIdx);
	socket.emit("initialize_others", players_idx);


	players_idx.push( myIdxStr );

    io.emit("newplayer", {thereidx: myIdx, players: players_idx} );



    // incoming data functions
    socket.on('player', function(playerData) {
        // console.log(playerData);
        player_data[myIdxStr] = playerData;

    });

    // Cleanup
    socket.on("disconnect", function() {
        console.log("User disconnected: " + myIdx);
		var idx2remove = players_idx.indexOf( myIdxStr );
		players_idx.splice( idx2remove, 1 );
		console.log(myIdx);
		console.log(players_idx);

		delete player_data[myIdxStr];
        io.emit("disconnect_player", myIdx);
    });

});


var sendLoop = setInterval(function() {

        io.emit("player_data", player_data);
		// console.log(player_data);
    },
    20
);
