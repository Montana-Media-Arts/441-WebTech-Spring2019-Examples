/*
Now, lets add some routes

Essentially, what data th user wants to see will be returned
 */

var http = require('http');

var data = require("./data/inventory");

http.createServer( function(req, res){

    if (req.url === "/") {
        // If requesting the home page, return ALL THE DATA
        res.writeHead(200, {"Content-Type": "text/json"});
        res.end(JSON.stringify(data));
    } else if (req.url === "/instock") {
        listInStock(res);
    } else if (req.url === "/onorder") {
        listOnBackOrder(res);
    } else {
        resWriteHead(404, {"Content-Type": "text/plain"});
        res.end("Whiips... Data not found");
    }


}).listen(3000);

console.log("Listening on Port 3000");


function listInStock(res){
    // the data is an array, so lets only grab what we need
    var inStock = data.filter( function(item){
        // Filter works by returned a "predicate" or true/false
        // as to whether the data item should be added to a new array
        // NOTE: the JSON object parameter says "In stock" in the file.
        return item.avail === "In stock";
    });

    res.end(JSON.stringify(inStock));

}

function listOnBackOrder(res){
    var onOrder = data.filter( function(item){
        // Filter works by returned a "predicate" or true/false
        // as to whether the data item should be added to a new array
        return item.avail === "On back order";
    });

    res.end(JSON.stringify(onOrder));
}
