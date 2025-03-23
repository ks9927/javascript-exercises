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

  let fDegree = (ftemp * 9/5 + 32);
  let roundedF = Math.round(fDegree * 10) / 10;
  return roundedF;
};

convertToFahrenheit(73.2);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
