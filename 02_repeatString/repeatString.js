const repeatString = function(string, num) {
    let newString = '';

    if (num === 0) {
        return '';
    }   
    for(i = 0; i < num; i++)
    {
        newString += string;
        return newString;
    }

};

// Do this withought .repeat() method

repeatString('hey', 4);
// Do not edit below this line
module.exports = repeatString;
