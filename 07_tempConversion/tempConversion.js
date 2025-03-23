const convertToCelsius = function(ctemp) {
  //fahren to celcius
  //f = (x − 32) × ⁠5/9 degrees c
  //x is ctemp
  let cDegree = (ctemp - 32) * 5/9;
  return cDegree;
};

const convertToFahrenheit = function(ftemp) {
  //celcius to fahren
  //c = (x * ⁠9/5 + 32) degrees f
  //x is ftemp

  //let fDegree = (fTemp * 9/5 + 32);
  //return fDegree;
};

convertToCelsius(32);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
