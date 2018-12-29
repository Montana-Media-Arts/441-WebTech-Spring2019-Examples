/* jshint esversion: 6 */

// This time, we have setup our file to return our dictionary-api

var express = require("express");

// Now, our dictionary api works great, but it has some limitations. The dictionary api, by default, is only allowed to serve this data to requests made for it from the same domain name. So our application works because our application is running on local host 3000 and our dictionary is also running on local host 3000. But what happens if our client application is running from skierdictionary.com and our dictionary api is running from skierterms.com? That means that this data, we would not be able to serve to a different domain name.
// So we can only serve this data to the exact same domain. Now, we've already installed a module that will help us get around that. If you go to your files, you will notice in your node modules folder that you have something called "cors." Cors stands for "cross origin resource sharing," and this specific module is a piece of middleware that we can add to our Epress pipeline to solve this problem.
var cors = require("cors");
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


// cors is a function.
// To add cross-origin resource sharing to our application, we go under our middleware and add cors to the middleware stack.
app.use(cors());



app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;
