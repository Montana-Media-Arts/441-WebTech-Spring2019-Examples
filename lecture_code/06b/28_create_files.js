/* Lets create a new markdown file */

var fs = require("fs");

var md = `

# Sample Markdown Title

## Sample Subtitle

- point
- point
- point

`;

// asynch write command
fs.writeFile("sample.md", md.trim(), function(err){
    console.log("File Created");
});
