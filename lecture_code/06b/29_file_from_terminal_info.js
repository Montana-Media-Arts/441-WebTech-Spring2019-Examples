// Same starting code as 15_readline_02.js
//
// The FS file gives us the ability to create files AND write files.
/* jshint esversion: 6 */


var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");

var realPerson = {
	name: '',
	sayings: []
};


rl.question("What is the name of a real person? ", function(answer) {

	realPerson.name = answer;

    // create a new file based on the persons name
    // Also add contents to the file
	fs.writeFileSync(realPerson.name + ".md", `# ${realPerson.name}\n\n`);


	rl.setPrompt(`What would ${realPerson.name} say? `);

	rl.prompt();

    // add new sayings to the file as they come in
	rl.on('line', function(saying) {

		realPerson.sayings.push(saying.trim());

        // identify the file that we will append
        // and add the saying every time
		fs.appendFile(realPerson.name + ".md", `- ${saying.trim()} \n`);

		if (saying.toLowerCase().trim() === 'exit') {
			rl.close();
		} else {
			rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
		    rl.prompt();
		}

	});

});


rl.on('close', function() {

	console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
	process.exit();

});
