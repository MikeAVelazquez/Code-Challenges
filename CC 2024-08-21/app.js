// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.



// Par: 
// R: Return a string with each word reversed. keep words in original order
// E:
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
// P: make a function that splits up the string into individual strings, reverse each string and add to new string



function reverseWords(str) {
  
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

