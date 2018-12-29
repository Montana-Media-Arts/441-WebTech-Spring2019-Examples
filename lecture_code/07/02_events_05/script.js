// select all of the div elements
let assignEl = document.querySelectorAll('.containers');

// add an event listened for each element returned.
// Also assign the bgChange function to respond to events.
for (let tempEl of assignEl) {
    tempEl.addEventListener( "click", bgChange );
}

function bgChange( event ) {

    // get the element from the "click" event method "currentTarget".
    let divEl = event.currentTarget;

    // check if an idx property has been created and added to
    // the element object
    // if one has not, add a new property called `idx` and bind to 0
    if( isNaN(divEl.idx) ) { divEl.idx = 0; }

    // check if a flashing property has been created and
    // assigned to the element object.
    if( divEl.flashing ){
        // if it has, clear the flashing timer.
        clearInterval( divEl.flashing );
    }

    // set the background color based on the elements idx property value
    if( divEl.idx === 0 ) {
        divEl.style.background = '#d8eb30';
    } else if ( divEl.idx === 1 ) {
        divEl.style.background = '#30ebb8';
    } else if ( divEl.idx === 2 ) {
        divEl.style.background = '#eb308f';
    }
    // increment the object idx property
    divEl.idx = (divEl.idx + 1) % 3;

    // check if the shift key was also down.
    // We can do this through the event's extra properties.
    // if it is, engage the flashing timers.
    if( event.shiftKey ){
        // create a continuos timer!
        divEl.flashing = setInterval( flashEl( divEl ), 200);
    }

}



// This timer returns a function that can execute.
// It is important to return a function, so that
// the scope of the function remains, and background
// values can be accessed and set.
function flashEl( el ) {
    // return an arrow function
    return () => {
        // get the original background color
        let oldColor = el.style.background;
        // set the background to white
        el.style.background = "#ffffff";
        // create a timeout to set the background back to the
        // original color in 80 milliseconds.
        setTimeout( ()=>{el.style.background = oldColor;}, 80 );
    };
}
