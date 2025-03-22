const removeFromArray = function(array, ...values) {
    let emptyArray = [];
  //for each element in an array
    array.forEach(element => {
        if(!values.includes(element))
        {
            emptyArray.push(element);
        }
    });
    return emptyArray;
};

removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
