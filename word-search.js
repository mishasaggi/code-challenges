function wordSearch(word, text){
  var textArray = text.split(' ');
  for(var i = 0; i < textArray.length; i++) {
    if(textArray[i][textArray[i].length-1] === ',' || textArray[i][textArray[i].length-1] === '.' ){
      textArray[i] = textArray[i].slice(0, textArray[i].length-1);
    }
    if(textArray[i] === word) return true;
  }
  return false;
}

/*
Example:
Text - "what makes the desert beautiful, said the little prince is that somewhere it hides a well";

wordSearch(Text,"prince")--> true
wordSearch(Text,"beautiful")--> true

*/
