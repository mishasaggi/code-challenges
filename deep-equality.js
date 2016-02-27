/*
Deeply Equal
Write a function that, given two objects, returns whether or not the two are 
deeply equivalent–meaning the structure of the two objects is the same, 
and so is the structure of each of their corresponding descendants.

DO NOT use JSON.stringify.
*/

deepEquals = function(apples, macs){
  //check for equality
  if(apples === macs) return true;
  //check for valid object for the nested level
  if(!(apples instanceof Object) || !(macs instanceof Object)) return false;
  //if one doesn't exist
  if(!apples || !macs) return false;
  //edge case if objects are of different length and one is a subset of other!
  if( Object.keys(apples).length !== Object.keys(macs).length ) return false;
  for(var key in apples){
    if(!deepEquals(apples[key], macs[key])) return false;
  }
  return true;
};   

