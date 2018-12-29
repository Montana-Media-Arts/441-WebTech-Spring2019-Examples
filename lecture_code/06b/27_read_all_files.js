var fs = require("fs");
var path = require("path");

fs.readdir("./lib", function(err, files) {

    fs.writeFileSync("test.md", `# TEST\n\n`);

    // We can us the JS forEach command to loop through
    // all elements of the array
    // This will return the file name
    files.forEach(function(fileName) {

        // get the full path
        var file = path.join(__dirname, "lib", fileName);

        // use fs.stat to get file statistics
        var stats = fs.statSync(file);
        // this will tell us if the file is a directroy or file
        // so
        if(stats.isFile() && fileName !== ".DS_Store"){

            fs.readFile(file, "UTF-8", function(err, contents){
                fs.appendFile("test.md", contents);
            });

        }

    });
});
