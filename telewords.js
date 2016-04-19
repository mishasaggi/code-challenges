function telephoneWords (digitString) {
  var dialer = {
    0: ['0'],
    1: ['1'],
    2: ['A','B','C'],
    3: ['D','E','F'],
    4: ['G','H','I'],
    5: ['J','K','L'],
    6: ['M','N','O'],
    7: ['P','Q','R','S'],
    8: ['T','U','V'],
    9: ['W','X','Y','Z']
  };
  var solution = [''], temp = [];
  //for every digit in the input
  for(var k = 0; k < digitString.length; k++){
    //go over previous permutations
    for ( var j = 0; j < solution.length; j++) { 
      //concat with previous permutations, letters representing the current digit 
      for(var i = 0; i < dialer[digitString[k]].length; i++) {
        temp.push(solution[j] + dialer[digitString[k]][i]);
      }
    }
    solution = temp;
    temp = [];
  }
  return solution;
}
