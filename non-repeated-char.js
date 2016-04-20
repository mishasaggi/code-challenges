function firstNonRepeatedCharacter (string) {
  //keep track of all characters and their frequency in an object
  //keep track of position in object value array or do indexOf on all occurances that are one
  var dictionary = {};
  for(var i=0; i<string.length; i++){
    if(!dictionary[string[i]]) {
      dictionary[string[i]] = [];
      dictionary[string[i]][0] = 1;
      dictionary[string[i]][1] = i;
    } else dictionary[string[i]][0] = dictionary[string[i]][0]+1;
  }
  var temp = ['|', string.length+1]; //any non alphabet as initial value
  for(var key in dictionary) {
    if(dictionary[key][0] === 1) {
      if (dictionary[key][1] < temp[1]) {
         temp[0] = key;
         temp[1] = dictionary[key][1];
      }
    }
  }
  if (Object.keys(dictionary).length === 1) return "sorry";
  else return temp[0];
}

