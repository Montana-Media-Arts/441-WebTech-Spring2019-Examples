/*
Utiling global timer functions
 */

var waitTime = 3000;
var currTime = 0;
var waitInterval = 500;

console.log("Wait for it");

var interval = setInterval(
  function() {
    currTime += waitInterval;
    console.log(`waiting ${currTime/1000} seconds...`);
  },
  waitInterval
);

setTimeout(
  function() {
    clearInterval(interval);
    console.log("done!");
  },
  waitTime
);
