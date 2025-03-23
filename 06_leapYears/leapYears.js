const leapYears = function(year) {
    //if year is divisible by 100 and divisible by 400 return true
     if(year % 100 === 0 && year % 400 !== 0)
    {
        return false;
    }
    //if year is divisible by 100 return false
    else if(year % 100 === 0 && year % 400 === 0)
    {
        return true;
    }
   else if(year % 4 === 0)
    {
         return true;
     }
    else
    {
        return false;
    }
};

leapYears(1600);
// Do not edit below this line
module.exports = leapYears;
