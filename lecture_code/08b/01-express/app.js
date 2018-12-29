var express = require("express");
//  NOTE: We do not need to include a path to modules when the reside
// in the node_modules directory. Node knows to look there.

// Next, we need to create an "application instance"
// We use express to do this.
var app = express();



// Now we can add middleware to our application.
// You can think of middleware as being customized plugins that we can use with Express to add functionality to our application.
// The piece of middleware that we want to use is a static file server that comes with Express. Express.static will invoke the static file server that comes with Express, and we're going to add it to our app pipeline as a piece of middleware. Now, this function needs to take in the name of the directory where we would like to serve static files from. That directory is ./public. So I add a path to the public directory there, and now if we are making requests for any static files that are found under that directory, they will get served.
app.use(express.static("./_site"));

// Tell express to listen on port 3000
app.listen(3000);

console.log("Express app running on port 3000");

// You dont need to export this app as a module. But it is always a good idea.
module.exports = app;



/*
Notice that our dictionary-api is throwing an error in our browser. Express is expecting this to be delivered through a server-api, which.... we haen;t built yet...
 */
