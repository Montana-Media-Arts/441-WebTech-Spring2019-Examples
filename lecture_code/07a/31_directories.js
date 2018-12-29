/* Lets check if we hae a directroy already */

var fs = require("fs");

if (fs.existsSync("testLib")) {
    console.log("Directory already exists!");
} else {

    // invoke the "make directory" function
    fs.mkdir("testLib", function(err){

        if (err) {
            console.log(err);
        } else {
            console.log("Directroy Created");
        }
    });

}
