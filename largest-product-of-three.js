//Sort. Possible cases: last three values, first two values (negative) and last value
function bubbleSort (input) { //make more efficient outer loop, run until needed
  for(var j=0; j<input.length; j++) {
    for(var i=0; i<input.length-1; i++) {
      if(input[i]>input[i+1]){
        var temp;
        temp = input[i+1];
        input[i+1]=input[i];
        input[i]=temp;
      }
    }
  }
  return input;
}
function largestProductOfThree (array) {
  sortedArray = bubbleSort(array);
  productAllPositive = sortedArray[array.length-1] * sortedArray[array.length-2] * sortedArray[array.length-3];
  productTwoNegatives = sortedArray[0] * sortedArray[1] * sortedArray[array.length-1];
  return productAllPositive > productTwoNegatives ?  productAllPositive : productTwoNegatives;
}
