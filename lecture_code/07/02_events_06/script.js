let btEl = document.querySelector('#b1');
btEl.addEventListener("click", popup);

function popup() {
    btEl.innerText = "I won't work anymore...";
    alert('You pressed the button!\nIt will only work once!');

    // remove the event listener.
    btEl.removeEventListener("click", popup);
}
