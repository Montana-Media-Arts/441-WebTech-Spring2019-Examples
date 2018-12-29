/* jshint esversion: 6 */

var http = require("http");
var fs = require("fs");
var path = require("path");

http.createServer( function(req, res){

    console.log(`${req.method} request for ${req.url}`);

    // Check to see if the request is for the homepage
    if (req.url === "/") {

        fs.readFile("./public/index.html", "UTF-8", function(err, html){

            // write head with 200 status (success)
            // Let the requesting browser know we are sending it
            // html text as its content type
            res.writeHead(200, {"Content-Type": "text/html"});

            // send the html and end
            res.end(html);

        });

    // look for requests that end with .css
    // This technique uses regular expression matching
    } else if (req.url.match(/.css$/)) {

        // create a path to the requested file
        // First we grab the base directory path
        // All files are in the "public/" directory, so add that
        // And finally add the name of the file requested
        var cssPath = path.join(__dirname, 'public', req.url);

        // create a file readstream
        var fileStream = fs.createReadStream(cssPath, "UTF-8");


        // PIPE THE DATA OUT

        // create a header
        res.writeHead(200, {"Content-Type": "text/css"});

        // now create the actual pipe for streaming
        // This will handle chunking, as well as the end of response
        fileStream.pipe(res);

    // Look for jpg requests
    } else if (req.url.match(/.jpg$/)) {

        var imgPath = path.join(__dirname, 'public', req.url);

        // We do not add "data type" as we are sending straight binary
        var imgStream = fs.createReadStream(imgPath);

        res.writeHead(200, {"Content-Type": "image/jpeg"});

        imgStream.pipe(res);

    // if it is not then we are going to respond with a 404 error
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404 File not found");
    }

}).listen(3000);


console.log("Server listening on port 3000");

/*
Notice in the terminal, that the browser is requesting additional files.
The problem is, we are telling the browser that those files are "404"s
 */
