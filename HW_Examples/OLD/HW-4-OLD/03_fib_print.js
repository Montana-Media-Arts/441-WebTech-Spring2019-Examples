/*
HW-4; part 3
INTERACTIVE FIBONACCI PRINTING

*/

// Import readline
var readline = require('readline');

// Define the Fibonacci Algorithm Function
function fib(num) {
    // console.log(num);
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return fib(num - 1) + fib(num - 2);
    }
}
