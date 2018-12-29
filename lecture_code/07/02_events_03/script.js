let btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

// assign the eent an "anonymous" function to execute.
btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  btn.style.backgroundColor = rndCol;
}
