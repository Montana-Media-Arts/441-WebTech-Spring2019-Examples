var fs = require("fs");

// // command to synchronously rename a file
// fs.renameSync("./rename_lib/project-config.js", "./rename_lib/config.json");
//
// // If there are any problems an error will be throw automatically
//
// console.log("Config json file renamed");

// move the file using rename
fs.rename("./rename_lib/notes.md", "./notes.md", function(err){

    if (err) {
        console.log(err);
    } else {
        console.log("Notes.md moved succesfully.");
    }
});
