// add an event listener to clear the initial text when focus occurs
document.querySelector("#textIn1").addEventListener("focus", clearText);
function clearText() {
    document.getElementById("textIn1").value = "";
}


// get text from the input box
function grabText() {
    let textIn;
    // grab the text that is there
    textIn = document.querySelector("#textIn1").value;
    // console.log(textIn);
    // check if text is blank, if so, post a warning.
    if( textIn.length < 1){ alert("please supply some text!"); return }

    // create a new node to add text to
    let textToAdd = document.createTextNode(textIn);
    // create a new paragraph element
    let newP = document.createElement("P");
    // add the text to the elements
    newP.appendChild(textToAdd);
    // select the storage div
    let storage = document.querySelector("#storageDiv");
    // append the paragraph element to the div storage element
    storage.appendChild(newP);
}



// prevent default "form submit behavior" of return key
// otherwise the "form" is "submitted" and the page reloads.....
// instead, execute our custom function
document.querySelector(".form1").addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        event.preventDefault();
        grabText();
    }
});

// add a listener for the button that executes our function
document.querySelector("#runButton").addEventListener('click', grabText );
