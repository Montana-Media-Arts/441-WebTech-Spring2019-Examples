let bgColRads = document.querySelectorAll(".bgColor");
let formElem = document.querySelector("form");

// register an event listener
formElem.addEventListener("click", changeBG);

// work through each o the elements.
// Use the value of the check element to set the bg color
function changeBG(){
    for( let rad of bgColRads ){
        if( rad.checked ){
            document.body.style.background = rad.value;
        }
    }
}
