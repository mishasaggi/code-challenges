function insertionSort (array) {
//version1: loop over and add elment to new array, push or unshift
//Cut using splice to insert in between.

//version2: build the sorted array in the same array
//Algo - loop over array, store element being read and 
//move stuff over to the right as long as greater than the saved element

    
  for (var i=0; i<array.length; i++) {
    temp = array[i];
    //compare with prev element and shift to the right
    for(var j=i-1; j>=0 && array[j]>temp; j--) {
      //shift to the right by overwriting 
      array[j+1] = array[j];
    }
      //last element
      array[j+1] = temp;
    }
    return array;
}
