/* Readline is used as a wrapper around stdin/stdout */

var readline = require('readline');

// Readline will now control the process
var rl = readline.createInterface(process.stdin, process.stdout);


// In order to use stdin/stdout,
// now all we have to do, is tell readline to ask a question
// We can then pass in the arguments that would be used with stdin/stdout
rl.question("what is the name of a real person? ", function(answer){
  console.log(answer);
});
