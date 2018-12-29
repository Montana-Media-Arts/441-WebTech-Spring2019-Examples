/*
Utiling global timer functions
 */

var waitTime = 3000;

console.log("Wait for it");

setTimeout(
  function() {
    console.log("done!");
  },
  waitTime
);
