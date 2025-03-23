const leapYears = function(year) {
    //if year is divisible by 4 return true
    if(year % 4 === 0)
    {
        return true;
    }
    //if year is divisible by 100 and divisible by 400 return true
    else if(year % 100 === 0 && year % 400 === 0)
    {
        return true;
    }
    //if year is divisible by 100 return false
    else if(year % 100 === 0)
    {
        return false;
    }
    else
    {
        return false;
    }
};

leapYears(1997);
// Do not edit below this line
module.exports = leapYears;
