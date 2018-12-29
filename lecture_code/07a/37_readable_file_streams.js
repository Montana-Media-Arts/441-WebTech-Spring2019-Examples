var fs = require("fs");

fs.readFile("./chat.log", "UTF-8", function(err, chatlog){
    console.log(`File Read. Length is ${chatlog.length}`);
});

console.log("Reading File");


/*
This is typically how we have read files. Now, this will read the file and it works relatively fast but the problem is readFile waits until the entire file is read before invoking the call back and passing the file contents.

It also buffers the entire file in one variable. If our "big data app" experiences heavy traffic, read file is going to create latency and could impact our memory. So a better solution might be to implement a readable stream.
 */
