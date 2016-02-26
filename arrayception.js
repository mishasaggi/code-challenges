// Given an array of arbitrarily nested arrays, 
// return n, where n is the deepest level that contains a non-array value.

function arrayception (array, counter, result) {
  var counter = counter || 0;
  var result = result || 0;
      counter++;
      for( var i=0; i<array.length; i++ ) {
        if( Array.isArray(array[i]) ) {
          result = arrayception(array[i], counter, result);
          //if the inner level is not an array, return if deepest
        } else if(array[i] !==undefined && counter > result) {
          result = counter;
        }
     }
     return result;
  }
