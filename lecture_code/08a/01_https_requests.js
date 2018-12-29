/* Use the HTTPS module to request HTML from external servers */

var https = require("https");
var fs = require("fs");

var options = {
    hostname: "en.wikipedia.org",
    // we know that wikipedia's https port is 443
    port: 443,
    path: "/wiki/George_Washington",
    method: "GET"
};

var req = https.request(options, function(res){

    // lets get the page sent to us "as a stream"
    var responseBody = "";

    console.log("Response from server started.");
    console.log(`Server Status: ${res.statusCode} `);
    console.log("Response Headers: %j", res.headers);

    // The response will come in as binary,
    // but we know it is UTF-8 binary, so lets set that.
    // res.setEncoding("UTF-8");

    // log the first chunk
    res.once("data", function(chunk) {
        console.log(chunk);
    });

    res.on("data", function(chunk){
        console.log(`--chunk-- ${chunk.length}`);
        // concatentate the data into the variable
        responseBody += chunk;
    });

    res.on("end", function(){
        fs.writeFile("george-washington.html", responseBody, function(err){
            if (err) {
                throw err;
            }
            console.log("File Downloaded");
        });
    });

});

// if any errors occur, emit the following
req.on("error", function(err){
    console.log(`Problem with request: ${err.message}`);

});


// End the Request
req.end();
