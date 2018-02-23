function move() {
  var elem = document.getElementById("databalk");   
  var width = 99;
  var id = setInterval(frame, 200);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width -= .1;
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

function fuelCounter() {
  var elem = document.getElementById("fuel");   
  var width = 99;
  var id = setInterval(frame, 200);
  function frame() {
    if (width >=100) {
      clearInterval(id);
    } else {
      width -= .05; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width + '%';
    }
  }
}

function heat() {
  var elem = document.getElementById("heat");   
  var width = 20;
  var id = setInterval(frame, 100);
  function frame() {
    if (width >=100) {
      clearInterval(id);
    } else {
      width -= .05; 
      elem.style.width = width + '°C'; 
      elem.innerHTML = width + '°C';
    }
  }
}