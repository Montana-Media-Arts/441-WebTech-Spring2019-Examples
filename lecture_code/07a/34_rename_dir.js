var fs = require("fs");

// we can use rename to also move directories
fs.renameSync("./assets/logs", "./logs");

console.log("Directory moved");
