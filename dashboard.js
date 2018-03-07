function databalk() {
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

function databalk2() {
  var elem = document.getElementById("databalk2");   
  var width = 99;
  var id = setInterval(frame, 400);
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


/*function oxygen() {
  var format = d3.format(".4f");
  console.log(' nu');
  d3.select('#oxygen2')
  .transition()
  .duration(100000000)
  .ease(d3.easeLinear)
  .tween("text", function() {
    var that = d3.select(this),
    i = d3.interpolateNumber(that.text().replace(/,/g, ""), '20');
    return function(t) {
      that
        .text(format(i(t)));
    }
  });
  d3.select('#oxygen2balk')
  .transition()
  .duration(1000000000)
  .ease(d3.easeLinear)
  .style("width", '50px')

}

function oxygen2() {
  var format = d3.format(".2f");
  console.log(' nu');
  d3.select('#oxygen1')
  .transition()
  .duration(1000000)
  .ease(d3.easeLinear)
  .tween("text", function() {
    var that = d3.select(this),
    i = d3.interpolateNumber(that.text().replace(/,/g, ""), '50');
    return function(t) {
      that
        .text(format(i(t)));
    }
  });
  d3.select('#oxygen1balk')
  .transition()
  .duration(10000000)
  .ease(d3.easeLinear)
  .style("width", '50px')

}

function fuel() {
  var format = d3.format(".3f");
  console.log(' nu');
  d3.select('#fuelspan')
  .transition()
  .duration(1000000)
  .ease(d3.easeLinear)
  .tween("text", function() {
    var that = d3.select(this),
    i = d3.interpolateNumber(that.text().replace(/,/g, ""), '50');
    return function(t) {
      that
        .text(format(i(t)));
    }
  });
  d3.select('#fuel')
  .transition()
  .duration(10000000)
  .ease(d3.easeLinear)
  .style("width", '50px')

}

function celsius() {
  var format = d3.format(".3f");
  console.log(' nu');
  d3.select('#celsius')
  .transition()
  .duration(1000000)
  .ease(d3.easeLinear)
  .tween("text", function() {
    var that = d3.select(this),
    i = d3.interpolateNumber(that.text().replace(/,/g, ""), '50');
    return function(t) {
      that
        .text(format(i(t)));
    }
  });
  d3.select('#heat')
  .transition()
  .duration(10000000)
  .ease(d3.easeLinear)
  .style("width", '50px')

} */