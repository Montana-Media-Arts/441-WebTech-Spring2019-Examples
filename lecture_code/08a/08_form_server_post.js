var http = require('http');
var fs = require('fs');

http.createServer( function( req, res ) {

    res.writeHead(200, {"Content-Type": "text/html"});

    fs.createReadStream("./public/form.html", "UTF-8").pipe(res);

}).listen(3000);

console.log("Listening on port 3000");
