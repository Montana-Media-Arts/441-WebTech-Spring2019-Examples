// Template strings also allow for the easier inclusion of variables directly into the string.
// This is accomplished using ${...}
// Any variables or expressions between the curly brackets will be evaluated as valid js code.

// an int variable
var numOfTrombones = 76;

// Print a string to the console and include the variable
// "There were " + numOfTrombones + " trombiones in that big parade."
console.log(`There were ${numOfTrombones} trombones in that big parade.`);

// math inside a string
console.log(`10 of the ${numOfTrombones} passed out during the parade due to poor preperation, leaving ${numOfTrombones - 10} trombones to finish the parade.`);
