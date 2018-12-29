/*
LETS CREATE A SERVER THAT CAN "SERVE" DATA
(SPECIFICALLY JSON DATA) BACK TO THE USER.

This is an API or application protocal interface
 */

var http = require('http');

var data = require("./data/inventory");

http.createServer( function(req, res){

    res.writeHead(200, {"Content-Type": "text/json"});

    res.end(JSON.stringify(data));

}).listen(3000);

console.log("Listening on Port 3000");
