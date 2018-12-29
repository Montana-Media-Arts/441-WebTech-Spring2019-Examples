
/* jshint esversion: 6 */


var fs = require("fs");

// This creates a readable file stream, reading in our *large* file.
// This allows us to pull in data from the file in "chunks"
var stream = fs.createReadStream("./chat.log", "UTF-8");

// we will concatenate the contents into the following variable
var data = "";

// "stream.once" will only fire once on the first event instance.
stream.once("data", function() {
	console.log("\n\n\n");
	console.log("Started Reading File");
	console.log("\n\n\n");
});

stream.on("data", function(chunk) {
	// display the length of current chunk
	process.stdout.write(`  chunk: ${chunk.length} |`);

	// add data chunk to the data namespace variable
	data += chunk;
});

// This is an event that will fire when the end event is fired
stream.on("end", function() {
	console.log("\n\n\n");
	console.log(`Finished Reading File. File lenth is ${data.length}`);
	console.log("\n\n\n");
});
