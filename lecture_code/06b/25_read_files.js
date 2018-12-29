var fs = require("fs");


var contents = fs.readFileSync("./lib/sayings.md", "UTF-8");
// What happens if we do not send a text encoding at the second argment?
// var contents = fs.readFileSync("./lib/sayings.md");
// We get binary.......

console.log(contents);
