/* The EVENT EMITTER */
var events = require('events');

// Create a new instance of the emitter
var emitter = new events.EventEmitter();

// Create a custom event (we can name this anything)
// This will be called when ever emit occurs
// The function is executed whenever the emit occurs
// This will occur asynchronously
emitter.on('customEvent', function(message, status) {
  // Log the paramters passed to the function
  console.log(`${status}: ${message}`);
});

// Trigger of Emit a custom event
// The first argument is the event name
// The next arguments are the arguments passed to the "custom event"
// This is similar to the argv process
emitter.emit('customEvent', "Hello World", 200);
