
var express = require("express");
var cors = require("cors");

// We need to get into the post data and parse it to use it.
// The "body-parser" will help us with this.
var bodyParser = require("body-parser");
var app = express();

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

// Lets add the body parse to the top of our middleware pipe
// This will have the body-parser look at app requests first
app.use(bodyParser.json());
// If the body data is sent url encoded, we can also parse that
app.use(bodyParser.urlencoded({ extended: false }));



app.use(function(req, res, next) {
    // Now lets log any post data we have
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

// Go to the browser and hit "Refresh". We can see our three terms showing up there. And if I try to add a new term, "Powder," "The good stuff, why we ski", when I add this term, now I still haven't handled the POST request, but what I want to show you is what that POST data looks like. So if we go over to our terminal, you will notice that our app has restarted since we are running it with no dev, and the last request was a POST request made for dictionary.api.

app.use(express.static("./public"));

app.use(cors());



// We need to add two more routes in our dictionary api

app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

// The first is our post request
app.post("/dictionary-api", function(req, res) {
    // Push the new term into the array
    skierTerms.push(req.body);
    // Respond with the new array
    res.json(skierTerms);
});
// Now when we add the term "Powder" : "The good stuff, why we ski"
// Notice that the page updates appropriatly.


// Now lets create a "delete route"
//
// If you send a term to dictonary-api, we need to find that term.
// To do that we add a colon to signify a variable
app.delete("/dictionary-api/:term", function(req, res) {
    // Now we need to remove the term
    // So lets use the js array filter function.
    // Each term will be passed as the variable definition to the callback function
    // If the function returns true the item stays in the array, if it returns false it is not included.
    // So check the definition.term (from the array) against the req.params.term
    // If they equal each other then return false.
    // This new array is stored back into the same namespace as the old one
    skierTerms = skierTerms.filter(function(definition) {
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
    });
    // return the array as a response
    res.json(skierTerms);
});
// To delete double click



app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;
