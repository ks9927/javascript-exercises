const convertToCelsius = function(ctemp) {
  //fahren to celcius
  //f = (x − 32) × ⁠5/9 degrees c
  //x is ctemp
  let cDegree = (ctemp - 32) * 5/9;
  let roundedC = Math.round(cDegree * 10) / 10;
  return roundedC;
};

const convertToFahrenheit = function(ftemp) {
  //celcius to fahren
  //c = (x * ⁠9/5 + 32) degrees f
  //x is ftemp

  //let fDegree = (fTemp * 9/5 + 32);
  //return fDegree;
};

convertToCelsius(100);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
