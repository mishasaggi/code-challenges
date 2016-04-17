
function listPosition(string) {
  //creating arrays for easier manipulation
  var word = string.split('');
  var sorted = string.split('').sort();
  var result = 1;
  
  function factorial(x) {
    return x <= 1 ? 1 : x * factorial(x-1);
  }

  while(word.length){
    for(var i=0; i<sorted.length; i++){
    //shift out any letters that match the sorted,
    //these do not contribute to the anagrams / factorial
      if(sorted[i] === word[0]){
        word.shift();
        sorted.splice(i,1);
        break;
      }else{
        var frequency = {};
        var repeatFact = 1;
        var count = factorial(sorted.length-1);
        //keep track of letter frequencies
        sorted.forEach(function(letter){
          if(frequency[letter]) frequency[letter]++;
          else frequency[letter] = 1;
        });
        //factorial to divide by to account for repeating letters
        for(var char in frequency){
          repeatFact *= factorial(frequency[char]);
        }
        result += count / repeatFact;    
      }
    }
  }
  return result;
}
