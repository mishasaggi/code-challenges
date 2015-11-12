function evenOccurence (arr) {
  var inputArray = arr.slice();
  var result = [];
  var count = 0;

result[0] = inputArray[0];
  for(var i=1; i<=inputArray.length-1; i++) {
    for(var j=0; j<=result.length-1; j++) {
      //push only unique items
      if(result.indexOf(inputArray[i]) < 0) {
        result.push(inputArray[i]);
      }
    }
  }
  for(var i=0; i<=result.length-1; i++){
    count = 0; //resetting count
    for(var j=0; j<=inputArray.length-1; j++) {
      if (result[i] === inputArray[j]){
        count++;
      }
    }
      if (count%2 === 0) return result[i];
    }
    return null;
}

//test function call
evenOccurence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]);


  