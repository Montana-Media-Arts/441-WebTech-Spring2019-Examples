/* Core Modules */

// Import the path module
var path = require('path');
// Import the utilities module
var util = require('util');
// import the node v8 module
var v8 = require('v8');

// Logs data WITH timestamp information
util.log( path.basename(__filename) );


// // create a new directory path
var dirUploads = path.join( __dirname, 'www', 'files', 'uploads' );
// // Log the directory path
util.log(dirUploads);
//
//
// // Use v8 to get information about the computer system
util.log( v8.getHeapStatistics() );
