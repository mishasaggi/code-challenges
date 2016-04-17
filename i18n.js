function abbreviate(string) {
  string = string.split(' ');
  console.log(string);
  //loop over array of strings
  var result = "", temp1 = "", temp2 = "";
  for(var i = 0; i < string.length; i++){
    //handle commas
    if(string[i][string[i].length-1] === ',' && string[i].length >= 5){
      result += string[i][0] + (string[i].length-3).toString()+ string[i][string[i].length-2] + ",";
      if(i <string.length-1) result += " ";
    }
    //handle hypenated words
    else if(string[i].split('-').length > 1) {
      temp1 = "";
      temp2 = "";
      temp1 = string[i].split('-');
      for(var j = 0; j< temp1.length; j++){
        temp2 += temp1[j][0] + (temp1[j].length-2).toString()+ temp1[j][temp1[j].length-1];
        if(j <temp1.length-1) temp2 += "-";
        if(j === temp1.length-1 && i <string.length-1) temp2 += " ";
      }
      result += temp2;
    } else if(string[i].length >= 4) {
      //everything else 4 chars or longer
      console.log(string[i])
      result += string[i][0] + (string[i].length-2).toString()+ string[i][string[i].length-1];
      if(i <string.length-1) result += " ";
      } else {
        result += string[i];
        if(i <string.length-1) result += " ";
      }
    }
  return result;
}


/*
Description:

The word i18n is a common abbreviation of internationalization the developer community use instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all words within that string of length 4 or greater into an abbreviation following the same rules.

Notes:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "e6t-r2e").
*/
