/* Rock Paper Permutation
  Given a number of rounds n, 
  return all the possible rock-paper-scissors play possibilities for that number of rounds.
 */

 function rockPaperPermutation (roundCount) {

  startArray = ['r', 'p', 's'];
  var solution = [''];
  if(roundCount === 0) return [];
  //repeat the steps as many times as the rounds given
  for (var i = 0; i < roundCount; i++) {
    //create a temp array to save concatenations in the intermediate step
    var temp = [];
    for(var j = 0; j < solution.length; j++){
      for(var p = 0; p < 3; p++){
        console.log("temp before concat", temp)
        //concatenate r,p,s with the current solution
        temp.push(solution[j] + startArray[p])
        console.log("temp after concat", temp)
      }
    }
    //replace the solution with the latest concatenations
    solution = temp;
  }
  return solution;
}


//test run
rockPaperPermutation(2);

