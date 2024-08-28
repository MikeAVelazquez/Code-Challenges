//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase() // Code here
}




//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


function removeExclamationMarks(s) {
  return s.replace('!','')
  return '';
}

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// E: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
  const grow = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
      res *= x[i];
    }
    return res;
  };
}

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// E:
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
// P: 
//  if index 0 is === to interger append to new array
//  move to next index and reapeat untill end of array


function filter_list(l) {
  return l.filter(Number.isInteger);
}