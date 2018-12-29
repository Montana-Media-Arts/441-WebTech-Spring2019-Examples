var fs = require("fs");

// now lets remove the old assets directory
fs.rmdir("./assets", function(err){
    if (err) {
        throw err;
    }

    console.log("Assets dir removed");

});

// This will throw an error
// BECAUSE the directory is not empty
fs.rmdir("./logs", function(err){
    if (err) {
        throw err;
    }

    console.log("Logs dir removed");

});
