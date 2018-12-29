var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
    this.name = name;
};

util.inherits(Person, EventEmitter);

// Export this as a module to node
module.exports = Person;
