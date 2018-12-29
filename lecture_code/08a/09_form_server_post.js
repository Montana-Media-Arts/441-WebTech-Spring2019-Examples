/* jshint esnext: true */

var http = require('http');
var fs = require('fs');

http.createServer( function( req, res ) {

    // check the send method
    if (req.method === "GET" ) {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
    } else if (req.method === "POST") {

        var body = "";

        req.on("data", function(chunk){
            body += chunk;
        });

        req.on("end", function() {
            res.writeHead(200, {"Content-Type": "text/html"});

            res.end(`
                <!DOCTYPE HTML>
                <html>
                    <head>
                        <title>Form Results</title>
                    </head>
                    <body>
                        <h1>Your Form Results</h1>
                        <p>${body}</p>
                    </body>
                </html>
            `);
        });
    }


}).listen(3000);

console.log("Listening on port 3000");
