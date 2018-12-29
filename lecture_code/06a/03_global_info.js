/*
There are many things available to us globally through javascript and node.js.

Such as being able to retrieve a reference to the current directory or the name and path of the current file.

To access this data we can call
__dirname
__filename

*/

console.log(`The current directory location is: ` + __dirname );
console.log(`The current file is: ` + __filename );



/*
For more information about all globally available functions please see the node.js API documentation on "Global Objects"

https://nodejs.org/dist/latest-v6.x/docs/api/globals.html

NOTE: this is where the console object exists in node as well. This differs from browser based JS, where the console object is part of the "global window" object.
 */
