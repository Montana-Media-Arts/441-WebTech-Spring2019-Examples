let elapsedTime = 0;

function countAndDisplay(){
    // increment the counter
    elapsedTime++;

    // display the time elapsed on the page
    let elem = document.querySelector('#countEl');
    elem.innerText = `Elapsed time since the page opened: ${elapsedTime}`;
}

// create a binding to the timer function
var timer = setInterval(countAndDisplay, 1000);

// cancel the timer function after 5 seconds
// notice we use the arrow function to both create
// and pass in the callback function
setTimeout( ()=>clearTimeout(timer), 5000 );
