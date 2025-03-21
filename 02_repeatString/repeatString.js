const repeatString = function(string, num) {
    let newString = string;
    for(i = 0; i < num; i++)
    {
        return newString.repeat(num);
    }
};

repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
