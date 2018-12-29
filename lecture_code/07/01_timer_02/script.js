let elapsedTime = 0;

function countAndDisplay(){
    // increment the counter
    elapsedTime++;

    // display the time elapsed on the page
    let el = document.querySelector('#countHeading');
    el.innerText = `Elapsed time since the page opened: ${elapsedTime}`;
}

setInterval(countAndDisplay, 1000);
