/* Readline is used as a wrapper around stdin/stdout */

var readline = require('readline');

// Readline will now control the process
var rl = readline.createInterface(process.stdin, process.stdout);

// create an object representing a person
var realPerson = {
  name: '',
  sayings: []
};


// We pass readline.question a string to display,
// and an event to execute on completion.
// In this case a callback function
rl.question("what is the name of a real person? ", function(answer){

  // In our callback function we can now use the data passed in
  // Set the object property 'name' to the answer to the question
  realPerson.name = answer;

  // Create another event
  // In this case a prompt that will be displayed
  rl.setPrompt(`What would ${realPerson.name} say? `);
  // Display the prompt
  rl.prompt();

  // the on() function tells readline to watch for changes in the terminal
  // When something occurs (hopefully the response to our "saying" question),
  // We will execute another callback function
  rl.on('line', function(saying) {
    console.log( saying.trim() );
  });

});
