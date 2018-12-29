
var bg;
var mouse;
var me;
var othersIdx = [];
var otherPlayers = {};

function setup() {
	createCanvas(1200, 800);
	bg = color('#86a1cf');
	background(bg);

	mouse = createVector(mouseX,mouseY);

	me = new ClientPlayer(200, 200, 30, '#67055d');
}

function draw() {

	background(bg);

	// Set the mouse to a p5.Vector
	mouse.set(mouseX, mouseY);

	// call the player object methods
	me.frame();

	for (var i = 0; i < othersIdx.length; i++) {
		if (otherPlayers[othersIdx[i]]) {

			otherPlayers[othersIdx[i]].frame();
		}
	}

}


/*************** socket data ***************/
socket.on("player_num", function(data){
    me.setIdx(data);
});

socket.on("initialize_others", function(data){

	// reset variable to empty array;
	otherPlayers = {};

	for (var i = 0; i < data.length; i++) {
		otherPlayers[data[i]] = new OtherPlayer();
	}

});

socket.on("newplayer", function(data){

	var newIdx = data.thereidx;
	othersIdx = data.players;
	console.log(data);
	console.log(me.idx);

	if (me.idx !== newIdx) {
		newIdx = newIdx.toString();
		otherPlayers[newIdx] = new OtherPlayer();
		console.log("new player: " + newIdx);
		console.log(data.thereidx);
	}

	console.log(othersIdx);
	console.log(otherPlayers);

});

socket.on("player_data", function(player_data){
	var playerServer, playerCurr;
	if (player_data) {

		for (var i = 0; i < othersIdx.length; i++) {

			playerServer = player_data[othersIdx[i]];
			playerCurr = otherPlayers[othersIdx[i]];

			if (playerServer && playerCurr) {
				playerCurr.size = playerServer.size;
				playerCurr.pos.x = playerServer.pos.x;
				playerCurr.pos.y = playerServer.pos.y;
				playerCurr.vel.x = playerServer.vel.x;
				playerCurr.vel.y = playerServer.vel.y;
			}
		}
	}
	// console.log(otherPlayers);
});

socket.on("disconnect_player", function(disconnect_id){
	othersIdx.splice(disconnect_id, 1);
	delete otherPlayers[disconnect_id.toString()];
});
