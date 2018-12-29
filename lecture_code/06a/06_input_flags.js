/* Using process.argv we can identify and grab user input parameters

To do this, we will follow the standard style that input parameters are passed after flags prepended with two dashes (i.e. --user "michael musick").

*/

// Since the process.argv function returns an array, we can create a function to identify and grab user parameters
function grab(flag){
  // Since this is an array, we can use the array function '.indexOf(argument)' to find the relavent index, if it exists.
  var index = process.argv.indexOf(flag);
  // We will test the index value, if it returns -1, then we will pass back null, otherwise, we will return the next item in the array (i.e. index++)
  return (index === -1) ? null : process.argv[++index];
}

// lets create a scenario to try out.
// first, grab the user
var user = grab('--user');
// next grab user-age
var user_age = grab('--user-age');

// Finally, we will print the information back to the screen. To do this, we will check if the user entered valid input data.
if( !user || !user_age ){
  console.log("data input not valid!");
} else {
  console.log(`${user} is ${user_age} years old.`);
}

/*
To run the app execute both of the following lines in the terminal;

$ node 06_input_flags.js
$ node 06_input_flags.js --user "michael musick" --user-age 32

*/
