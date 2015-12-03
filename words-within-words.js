/*
Words within Words
Given an array of unique words, find the word that contains the greatest number of other 
words. A word must be at least two letters long. Try to find a solution in O(n) time.

Examples
Input wordList:                                   Output:
[ "Gray", "Grays", "Ray", "Rays", "Strays" ]      "Grays"
*/

function nestedWordCount (wordList) {
  //read each index of the string
  //compare with each other value in the array
  //if length of the string comparing with is more, check if it includes 
  //the substring
  var longestW = "";
  
  //?add maybe an object to keep track of how many other words it contains?
  //This might be redundant. REFACTOR - use difference of strings
  
  var objCount = {};
  
  for(var i=0; i<wordList.length; i++) {
    //keep track of length of current word being checked
    var currentWlength = 0;
    currentWlength = wordList[i].length;
    
    for(var j=0; j<wordList.length; j++) {
      //compare with every other word to see if it contains the current 
      if(wordList[j].toLowerCase().includes(wordList[i].toLowerCase())){
        //if true set the longest word to this
        // longestW = wordList[j];
        
        if (!objCount[wordList[j]]){
          objCount[wordList[j]] = 1;
        } else {
          objCount[wordList[j]] += 1;
        }
        //change the length of tracker
        // currentWlength = longestW.length
      }
    }
  }
  var result;
  var check = 0;
  for(key in objCount){
    if(objCount[key] > check){
      check = objCount[key];
      result = key;
    }
  };
  
console.log(objCount);
console.log(result);
return result;
}
