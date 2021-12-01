document.getElementById('celsius').onkeyup = updateFahrenheit;

document.getElementById('fahrenheit').onkeyup = 
  updateCelsius;

document.getElementById('celsius').value = 0;

// initial value on page load
updateFahrenheit();

function updateFahrenheit() {
  var c = document.getElementById('celsius').value;
  var f;
  if ( (c == null) || (c == "") || (isNaN(c) ) )
  {
    f = "";
  }
  else
  {
    f = celsiusToFahrenheit(c);
  }
  document.getElementById('fahrenheit').value = f;
}

function updateCelsius() {
  var f = document.getElementById('fahrenheit').value;
  var c;
  if ( (f == null) || (f == "") || (isNaN(f) ) )
  {
    c = "";
  }
  else
  {
    c = fahrenheitToCelsius(f);
  }
  document.getElementById('celsius').value = c;
}

function myround(x) {
  return Math.round(10 * x) / 10;
}

function celsiusToFahrenheit(c) {
  var answer = c * 9 / 5 + 32;
  return myround(answer);
}

function fahrenheitToCelsius(f) {
  var answer = (f - 32) * 5 / 9;
  return myround(answer);
}


