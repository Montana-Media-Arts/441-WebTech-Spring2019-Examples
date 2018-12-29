var exec = require('child_process').exec;


// Execute a directory listing (`dir` on windows)
exec("ls", function(err, stdout) {

    if (err) {
        throw err;
    }

    console.log("Listing Finished");
    console.log(stdout);

});
