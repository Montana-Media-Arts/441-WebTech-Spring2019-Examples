var fs = require("fs");


fs.readdirSync("./logs").forEach( function(fileName, index){

    // console.log(`The name of the file is ${fileName}, at index: ${index}`);

    fs.unlinkSync("./logs/"+fileName);

});

fs.rmdir("./logs", function(err){
    if (err) {
        throw err;
    }

    console.log("Logs dir removed");

});
