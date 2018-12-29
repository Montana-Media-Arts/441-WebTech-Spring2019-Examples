let btEl = document.querySelector('#b1');
btEl.addEventListener("click", showHideText);

let textEl = document.querySelector(".extra-text-container");

function showHideText() {
    if(textEl.hidden){
        btEl.innerText = "Click to hide this text...";
        textEl.hidden = false;
    } else {
        btEl.innerText = "More text...";
        textEl.hidden = true;
    }
}
