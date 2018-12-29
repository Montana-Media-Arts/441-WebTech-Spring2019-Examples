/* jshint esversion: 6 */

// This time, we have setup our file to return our dictionary-api

var express = require("express");

var app = express();


// Dictionary terms
var skierTerms = [
    {
        term: "Rip",
        defined: "To move at a high rate of speed"
    },
    {
        term: "Huck",
        defined: "To throw your body off of something, usually a natural feature like a cliff"
    },
    {
        term: "Chowder",
        defined: "Powder after it has been sufficiently skied"
    }
];


app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));


// This app.get function sets up a 'get' route.
// The first argument is the route
// The second argument is the callback function to be called
// These are the same 'request' and 'response' we used in our http module.
// But they have been super powered by express.
// Express has added some functionality to them to make things easy for us.
// The response object now has a json function. In the response, json function will simply take a json object, like our skiier terms and automatically handle stringifying it, and setting up the headers to reply with a json response.
//
// Navigate to localhost:3000/dictionary-api
app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;
