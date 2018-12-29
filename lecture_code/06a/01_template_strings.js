// One of the new features in JS (ES6) is "template strings"

// Template strings are created using single backticks (as opposed to quotations.)

//  Reminder; the backtick key is the one above the tab key and below the esc key on most keyboards.

// For more on template strings see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// regular string, using template string notation
var str1 = "A string\n\t\t\t\tline 2";

// A multi-line string
// Template strings recognize white space and new lines.
var str2_multiLine = `Line 1
line 2

line 4
please notice the new line escape character\nalso works.`;

// Print the strings out
console.log(str1);
console.log(str2_multiLine);
