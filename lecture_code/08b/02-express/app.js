var express = require("express");

var app = express();

// Lets also add a piece of middleware that we can use to describe each request
// So whenever we have a requst, the app will first use our middleware,
// then move on to additional middleware.
//
// After logging these details to the terminal, we want to still serve the request.
//
// Our requests are presently being served in the next piece of middleware under express.static. So in order to tell our application to move on to the next piece of middleware in the pipeline, we need to invoke this next function. If we do not invoke this next function, we will never send a response back, and our application will technically not work.
// So you must call next();
app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});
// This shows us that a single request for the homepage, is make a bunch of other requests.

app.use(express.static("./public"));

// Tell express to listen on port 3000
app.listen(3000);

console.log("Express app running on port 3000");


module.exports = app;
