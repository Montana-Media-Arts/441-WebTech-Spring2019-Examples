var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var realPerson = {
	name: '',
	sayings: []
};


rl.question("What is the name of a real person? ", function(answer) {

	realPerson.name = answer;

	var stream = fs.createWriteStream(realPerson.name + ".md");

    // instead of fileWrite we simply call write on our stream
	stream.write(`# ${realPerson.name}\n\n`);

	rl.setPrompt(`What would ${realPerson.name} say? `);

	rl.prompt();

	rl.on('line', function(saying) {

		if (saying.toLowerCase().trim() === 'exit') {
            // if we end our session, we MUST close our file.
			stream.close();
            // close our interface
			rl.close();
		} else {

			realPerson.sayings.push(saying.trim());

            // write the stream to the document
            // notice that we simply call write and no longer "appendToFile()"
		    stream.write(`- ${saying.trim()} \n`);

			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
		    rl.prompt();
		}

	});

});


rl.on('close', function() {

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();

});
