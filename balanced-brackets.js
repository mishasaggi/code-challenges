/*
Balanced Brackets
Given a string, return true if it contains all balanced parenthesis (), 
curly-brackets {}, and square-brackets [].

Input Output
str: "(x + y) - (4)" true
str: "(x + y) - (4)" true
str: "(((10 ) ()) ((?)(:)))" true
str: "[{()}]"  true
str: "(50)(" false
*/

function isBalanced(string) {
  bracketMatcher = {
    '{' : '}',
    '(' : ')',
    '[' : ']'
  };

  openBrackets = [];
  
  //pop stack when encountering a close bracket and match with most recent open bracket.

  for (var i = 0; i < string.length; i++) {
    //iterate over the string and save open brackets into a stack.
    if(string[i] === '(' || string[i] === '{' || string[i] === '['){
      openBrackets.push(string[i]);
    } else if (string[i] === ')' || string[i] === '}' || string[i] === ']') {
      if(string[i] !== bracketMatcher[openBrackets.pop()]) return false;
    }
  }
  //are there any left over brackets
  if(openBrackets.length > 0) return false;
  return true;
}

