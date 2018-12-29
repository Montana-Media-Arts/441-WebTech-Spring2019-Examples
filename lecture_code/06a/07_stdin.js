/*

Lets use standard out and standard input to create a simple 'interactive' app.
*/

// Possible questions to ask the user
var questions = [
  "What is your name?",
  "What is your favorite hobby?",
  "What is your favorite coding language?"
];

// An empty array to collect answers
var answers = [];

// a function to ask the user questions.
// notice, that we use standard output (process.stdout.write()) to print to the terminal.
function ask(i) {
  process.stdout.write(`\n\n${questions[i]} > `);
}

// lets create a listener
// This callback function will be executed whenever there is data available at the standard input (aka. terminal)
process.stdin.on('data', function(data) {
  // This would simply return the response back to the terminal
  // process.stdout.write(`\n${data.toString().trim()}\n`);

  // lets store the answer into the answers array.
  answers.push(data.toString().trim());
  //
  // Lets check if there are more questions to ask.
  if (answers.length < questions.length) {
    // then ask the next question until there are no more.
    ask(answers.length);
  } else {
    // else we will force the process to exit
    process.exit();
  }
});

// Lets create another listener to do something when the process (this node app) us exiting.
process.on('exit', function() {

  // Create some space above the answers
  process.stdout.write(`\n\n\n\n`);
  // Print out the answers in context.
  process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later.`);
  process.stdout.write(`\n\n`);
});

// Start the questions!
ask(0);
