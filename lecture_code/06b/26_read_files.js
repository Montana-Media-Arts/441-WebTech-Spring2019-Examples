var fs = require("fs");

// asynch
var contents = fs.readFile("./lib/sayings.md", "UTF-8", function(err, contents){

    if (err) {
        console.log(err);
    }

    console.log(contents);

});
