const sumAll = function(num1, num2) {
    let totalSum = 0;
    for(let i = num1; i < num2 + 1; i++)
    {
        totalSum += i;
    }
    return totalSum;
};

sumAll(1, 4);
// Do not edit below this line
module.exports = sumAll;
