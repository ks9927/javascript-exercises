const removeFromArray = function(array, value) {
    //if array includes value, remove it
    if (array.includes(value)) {
     //find index of value
    let index = array.indexOf(value);
     array.splice(index, 1);
    return array;
    }
};

removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
