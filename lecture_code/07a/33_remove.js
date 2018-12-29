var fs = require("fs");


// lets use a try/catch block to prevent crashes for the synchronous command
try {
    fs.unlinkSync("./remove_lib/config.json");
} catch (err) {
    console.log(err);
}

// asynchronous version

fs.unlink("./remove_lib/notes.md", function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Notes.md removed");
    }
});

console.log("\nProgram End\n\n\n");
