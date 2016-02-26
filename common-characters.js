/*
Common Characters

Write a function that accepts two strings as arguments, and 
returns only the characters that are common to both strings.
Your function should return the common characters in the 
same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.

Example: commonCharacters('acexivou', 'aegihobu')
Returns: 'aeiou'
*/

//for over first string
  //for over second string comparing each character to outer loop
  //check if it is in unique object already
  //push into an array if in outer loop
//join
//return string

commonCharacters = function(string1, string2){
  var unique = {},
      common = [];

  for(var i = 0; i < string1.length; i++) {
    for(var j = 0; j < string2.length; j++) {
      if(string1[i] === string2[j] && string1[i] !== ' ') {
        if(!unique[string1[i]]){
          unique[string1[i]] = string1[i];
          common.push(string1[i]);
        } 
      }
    }
  }
  return common.join('');
}
