// NOTE: first `node alwaystalking` to see what it does by itself.


/* Spawn is made for long processes that will send lots of data. Such as 'always talking' */

var spawn = require("child_process").spawn;

var cp = spawn("node", ["alwaysTalking"]);

cp.stdout.on('data', function(data){
    console.log(`STDOUT: ${data.toString()}`);
});

cp.on('close', function(){
    console.log("Child Process has ended");
    process.exit();
});


setTimeout(function(){
    cp.stdin.write("stop");
}, 4000);
