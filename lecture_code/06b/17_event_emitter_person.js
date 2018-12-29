/* We can get real use out of the event emitter
by letting other objects inherit the module

*/

// Lets pull the eventEmitter itself out
// So instead of...
// var events = require('events');
// We have
var EventEmitter = require('events').EventEmitter;
var util = require('util');

// Lets create a person object via a constructor function
var Person = function(name){
  this.name = name;

};

// The util module has an "inherit"s function
// that allows us to add an object to the prototype of an existing object
// AKA. Inheritance!
//
// The following line allows the "Person" object to inherit our "EventEmitter"
// This means our person object inherits all of the functionality
// from the EventEmitter
// All new instances of "Person" have an "onEmit" function
util.inherits(Person, EventEmitter);

// Lets create a new person
var ben = new Person("Ben Franklin");

// ben has emit functionality
// So lets register a custome event listener callback
ben.on('speak', function(said){

  console.log(`${this.name}: ${said}`);

});

// Now lets register a 'speak' event to emit
ben.emit('speak', "You may delay, but time will not.");
