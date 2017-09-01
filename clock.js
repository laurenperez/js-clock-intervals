
var secInterval = 360/60;
var minInterval = (360/60)/60;
var hourInterval = 360/43200;


var secDegrees = 0;
var minDegrees = 0;
var hourDegrees = 0;


var secMovement = setInterval(function(){
  var secondHand = document.getElementById('second');
  secDegrees += secInterval;
  secondHand.style.transform = "rotate(" + secDegrees + "deg)";
}, 1000);

var minMovement = setInterval(function(){
  var minuteHand = document.getElementById('minute');
  minDegrees += minInterval;
  minuteHand.style.transform = "rotate(" + minDegrees + "deg)";
}, 1000);

var hourMovement = setInterval(function(){
  var hourHand = document.getElementById('hour');
  hourDegrees += hourInterval;
  hourHand.style.transform = "rotate(" + hourDegrees + "deg)";
}, 1000);


secMovement();

minMovement();

hourMovement();