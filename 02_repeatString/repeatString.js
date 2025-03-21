const repeatString = function(string, num) {
    let newString = string;

    if (num === 0) {
        return '';
    }
    for(i = 0; i < num; i++)
    {
        return newString.repeat(num);
    }
};

// Repeats string 0 times..if num is 0 then return ''

repeatString('hey', 0);
// Do not edit below this line
module.exports = repeatString;
