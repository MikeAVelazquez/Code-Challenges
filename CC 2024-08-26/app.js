// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.


//R: take in a string and return a number 

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7


const stringToNumber = function(str){
  return parseInt(str)  // put your code here
  return null;
}
return parseInt(str)



// Given an array of integers your solution should find the smallest integer.

// Example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


//PCode: take an array and sort lowest to highest ans return first number in array


function findSmallestInt(arr) {
  let result = arr.sort((a,b) => a-b)//your code here
  return arr[0]
  return 0;
}