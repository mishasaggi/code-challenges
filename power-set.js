// //iterative solution using Objects
// function powerSet(string) {
//   string = string.split('').sort();
//   //starting with an empty set
//   var uniqueStrings = {'': ""}; 
  
//   string.forEach( function(item){
//     if (!uniqueStrings[item]) {
//       //going over the seed string set to make all possible combinations
//       for (var result in uniqueStrings) {
//         //will not store dupilcates because it's an object
//         uniqueStrings[result+item] = result+item;
//       }
//     }
//   });
//   return Object.keys(uniqueStrings).sort();
// }


/*
Using a nested loop limited the number of combinations being created. 
The combination "ba" didn't have to be weeded out because it was never created. 
Below is a better explanation of how that's happening:

//debugger;
//powerSet("ab")

foreach iteration 1
item is a
iterating over object, single key, single iteration:
    concatenates "" with a. Object now contains {"": "", "a", "a"}

foreach iteration 2
item is b 
iterating over object, two keys, two iterations:
    key is "", concatenates with "b". Object now contains {"": "", "a", "a", "b": "b"}
    key is "a", concatenates with "b". Object now contains {"": "", "a", "a", "b": "b", "ab"}
    the for-in loop exits here. Explained below.

ForEach loop has ended


Deleted, added or modified properties in a FOR-IN loop. Source: MDN

A for...in loop iterates over the properties of an object in an arbitrary order 
(see the delete operator for more on why one cannot depend on the seeming orderliness of iteration, 
at least in a cross-browser setting). If a property is modified in one iteration and 
then visited at a later time, its value in the loop is its value at that later time. 
A property that is deleted before it has been visited will not be visited later. 
Properties added to the object over which iteration is occurring may either be visited or omitted from iteration. 
In general it is best not to add, modify or remove properties from the object during iteration, 
other than the property currently being visited. There is no guarantee whether or not an added property
will be visited, whether a modified property (other than the current one) will be visited before or after
it is modified, or whether a deleted property will be visited before it is deleted.
*/

//iterative solution using arrays

function powerSet(string) {
  //if only using arrays for concatenation, the input string array needs to have unique characters
  //string = string.split('').sort(); //will not work for "obama"
  var temp = {};
  for (var i=0; i< string.length; i++){
    if(!temp[string[i]]) temp[string[i]] = string[i];
  }
  var string = Object.keys(temp);
  string = string.sort();
  
  var allStrings = []
  allStrings.push("");
  
  string.forEach(function(stringItem){ //a, m, n
    allStrings.forEach(function(resultItem){
      allStrings.push(resultItem + stringItem);
    });
  });
  return allStrings.sort();
}

/*
  initial thought was that if nested loop over array creates all combinations, can use this to make duplicate
  combinations be equal an so comparable for removal
  currentCombination.split('').sort().join();
  example to eensure "ba" is stored as "ab"
  "ba".split('').sort().join();
  
  But, just like the object implementation, the combinations 
  being created were limited, taking care of  duplication of
  "ab"/"ba" nature. The only duplication I needed to account for was 
  in the array solution was the repeating chars in the input 
  string. 
  
  Similar to the Object solution, the reason only limited 
  combinations are created can can be observed while stepping 
  through the code and understanding how the foreach is designed 
  wrt the collection reference that is passed in.
  
  Source MDN.
  The range of elements processed by forEach() is set before 
  the first invocation of callback. Elements that are appended
  to the array after the call to forEach() begins will not be
  visited by callback. If the values of existing elements of 
  the array are changed, the value passed to callback will be
  the value at the time forEach() visits them; elements that 
  are deleted before being visited are not visited.
  
  //debugger;
  //powerSet("man")

iteration 1
stringItem is:  a
  inner iteration over allStrings array, resultItem "" is concatenated with stringItem:  "a"
  allStrings is:  ["", "a"]

iteration 2
stringItem is:  m
  inner iteration over allStrings array, resultItem "" is concatenated with stringItem:  "m"
  allStrings is:  ["", "a", "m"]
  inner iteration over allStrings array, resultItem "a" is concatenated with stringItem:  "m"
  allStrings is:  ["", "a", "m", "am"]

iteration 3
stringItem is:  n
  inner iteration over allStrings array, resultItem "" is concatenated with stringItem:  "n"
  allStrings is:  ["", "a", "m", "am", "n"]
  inner iteration over allStrings array, resultItem "a" is concatenated with stringItem:  "n"
  allStrings is:  ["", "a", "m", "am", "n", "an"]
  inner iteration over allStrings array, resultItem "m" is concatenated with stringItem:  "n"
  allStrings is:  ["", "a", "m", "am", "n", "an", "mn"]
  inner iteration over allStrings array, resultItem "am" is concatenated with stringItem:  "n"
  allStrings is:  ["", "a", "m", "am", "n", "an", "mn", "amn"]
  inner iteration does not continue over newly added items as explained before

Outer iteration ends.
  

  
  Summary. Comparing the two solutions:
  Object for results: does not add duplicate chars, 
  does not iterate in the inner loop if duplicate read from 
  the input string
  
  Array for results: reads duplicates in outer loop hence needs 
  an input array free of duplicates. Inner loop pushes to array 
  so it will not check for repeated chars.
  
*/

//Other approaches to try
//recursive
//regex
//functional
