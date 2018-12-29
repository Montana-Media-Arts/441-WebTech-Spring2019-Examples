function changeBackground(){
    // change the pages background color
    let el = document.querySelector('body');
    el.style.background = '#ff0000';

    // add an annoying popup alert
    alert("The Example Page Background Color Just CHANGED!");
}

// call the timeout function and execute the above function
// waite 3000 milliseconds (3 seconds)
setTimeout( changeBackground, 3000 );
