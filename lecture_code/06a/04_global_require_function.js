/*
Another global function that is party of node is the "require()" statement.

Thie require statement allows us to pull in, include, & use node modules/packages in our projects.

One such module that comes pre-installed with the basic node installation is "path".

Path allows us to grab more specific pieces of information about our active file and path.

For example in the code below, we can call the basename() function on the path module, passing the full filepath as an argument. This will return just the base filename.
 */

var path = require("path");

console.log(`The name of this file is: ${path.basename(__filename)}` );


console.log( path.isAbsolute('./baz/..') );
console.log( path.isAbsolute('qux/') );
