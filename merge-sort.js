//iterative - done | recursion - timing out

function mergeSort(array) {

 // mergeArray stores sublists, subSortArray stores presorted arrays to be merged
  var mergeArray = []
  var currentList = [];
  for (var i = 0; i < array.length; i++) {
    if (currentList.length && array[i] < currentList[currentList.length-1]) {
      mergeArray.push(currentList);
      currentList = [];
    }
    currentList.push(array[i]);
  }
  mergeArray.push(currentList);

//merges two sorted adjacent arrays
  function merge(arr1,arr2) {
    var sorted = []
    // while there are values in either array
    while (arr1.length || arr2.length) {
      // compare the first value in both arrays and push to temp
      if(!arr1.length || arr1[0]>arr2[0]) {
        sorted.push(arr2.shift())
      } else {
        sorted.push(arr1.shift())
      }
    }
    return sorted
  }
  
// while there are pre sorted arrays remaining in mergeArray
// call merge two values at a time
  while(mergeArray.length > 1) {
    var tempArray = []
    for (var j = 0; j < mergeArray.length-1; j+=2) {
      tempArray.push(merge(mergeArray[j],mergeArray[j+1]))
    }
    // add last item remaning incase of odd length
    if(mergeArray.length%2 > 0) {
      tempArray.push(mergeArray[mergeArray.length-1])
    }
    //replace mergearray with tempArray
    mergeArray = tempArray
  }
  return mergeArray[0]
}
