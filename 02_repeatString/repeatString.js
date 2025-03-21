const repeatString = function(string, num) {
    let newString = string;

    if (num === 0) {
        return '';
    }
    for(i = 0; i < num; i++)
    {
        return newString;
    }
};

// Do this withought .repeat() method

repeatString('hey', 4);
// Do not edit below this line
module.exports = repeatString;
