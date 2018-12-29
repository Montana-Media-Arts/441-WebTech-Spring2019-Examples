var Person = require("./lib/Person");

// Use the class module to create two instances!
var ben = new Person("Ben Franklin");
var george = new Person("George Washington");

george.on('speak', function(said) {

    console.log(`${this.name} -> ${said}`);

});

ben.on('speak', function(said) {

    console.log(`${this.name}: ${said}`);

});

ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "It is far better to be alone, than to be in bad company.");
