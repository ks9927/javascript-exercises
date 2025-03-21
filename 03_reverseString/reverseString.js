const reverseString = function(string) {
    // Split string. string turns to array of substrings
    let stringSplit = string.split("");
    //Reverse it using array method. still an array
    let stringReverse = stringSplit.reverse();
    //Join it back together by turning array back to string?
    // now i get the string with commas
    let stringJoin = stringReverse.join("");
   return stringJoin;


};

reverseString("hello there");

// Do not edit below this line
module.exports = reverseString;
