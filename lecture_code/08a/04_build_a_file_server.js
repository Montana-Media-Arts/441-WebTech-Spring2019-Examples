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

check "localhost:3000/birds.jpg"
 */
