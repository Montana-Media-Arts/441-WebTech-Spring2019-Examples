var fs = require("fs");

// invoke the "make directory" function
fs.mkdir("testLib", function(err){

    if (err) {
        console.log(err);
    } else {
        console.log("Directroy Created");
    }
});

// Notice that if you run thise app twice, it will throw an error, since the directroy already exists 
