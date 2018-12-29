let idx = 0;

function bgChange() {

    let divEl = document.querySelector('#mainContainer');

    if( idx === 0 ) {
        divEl.style.background = '#d8eb30';
    } else if ( idx === 1 ) {
        divEl.style.background = '#30ebb8';
    } else if ( idx === 2 ) {
        divEl.style.background = '#eb308f';
    }

    idx = (idx + 1) % 3;
}
