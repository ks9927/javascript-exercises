const sumAll = function(num1, num2) {
    let totalSum = 0;

    if(num1 > num2)
    {
       for(let j = num1; j > num2 - 1; j--)
       {
            totalSum += j;
       }
       return totalSum;
    }

 else {
    for(let i = num1; i < num2 + 1; i++)
    {
        totalSum += i;
    }
 }
    return totalSum;
};

sumAll(4, 1);
// Do not edit below this line
module.exports = sumAll;
