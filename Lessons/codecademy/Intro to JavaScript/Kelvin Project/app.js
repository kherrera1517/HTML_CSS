//Sets kelvin variable to 294 for temperature conversion
const kelvin_step1 = 294;
const kelvin = prompt('I can tell you fahrenheit temperature! What is the Kelvin temperature today?');
console.log(kelvin);

//Sets celsius variable using kelvin variable
var celsius = kelvin - 273;
console.log(celsius);

//Uses celsius variable to calculate fahrenheit using conversion equation
var Fahrenheit = celsius * (9/5) + 32;
console.log(Fahrenheit);

var fahrenheit = Math.floor(Fahrenheit);
console.log("The temperature is " + fahrenheit + " degrees fahrenheit");