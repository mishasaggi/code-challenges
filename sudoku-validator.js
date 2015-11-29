function validSolution(board){
  // converting to array of strings
str = board;
var sum = 0;
// rows, columns and total sum
// checking sums first for optimization
for(var row=0; row<str.length; row++) {
  sum = 0;
  for(var col=0; col<str[0].length; col++){
    sum += str[row][col];
  }
  if(sum !== 45) return false;
}
//grid sum checker
// 0-0 0-1 0-2 0-3 0-4 0-5 0-6 0-7 0-8
// 1-0 1-1 1-2 1-3 1-4 1-5 1-6 1-7 1-8
// 2-0 2-1 2-2 2-3 2-4 2-5 2-6 2-7 2-8
// 3-0 3-1 3-2 3-3 3-4 3-5 3-6 3-7 3-8
// 4-0 4-1 4-2 4-3 4-4 4-5 4-6 4-7 4-8
// 5-0 5-1 5-2 5-3 5-4 5-5 5-6 5-7 5-8
// 6-0 6-1 6-2 6-3 6-4 6-5 6-6 6-7 6-8
// 7-0 7-1 7-2 7-3 7-4 7-5 7-6 7-7 7-8
// 8-0 8-1 8-2 8-3 8-4 8-5 8-6 8-7 8-8


for(var startR = 0; startR < 9; startR = startR+3) {
  for(var startC = 0; startC < 9; startC = startC+3){
    sum = 0;
    for(var row = startR; row < startR + 3; row++) {
      for(var col = startC; col < startC + 3; col++) {
        sum += str[row][col];
      }
    }
  if(sum !== 45) return false;
  }
}

//row checker
for(var row=0; row<str.length; row++){
    var colObj = {};
    for(var col=0; col<str[row].length; col++){
        console.log(str[row][col]);
        if(!colObj[str[row][col]]){
            colObj[str[row][col]] = str[row][col];
        } else return false ;
    }
}

//column checker
for(var col=0; col<str[0].length; col++){
 
    //column place is fixed = col
    //row should be an iteration
    var rowObj = {};
    for(var row=0; row<str.length; row++){
        console.log(str[row][col]);
        if(!rowObj[str[row][col]]){
            rowObj[str[row][col]] = str[row][col];
        } else return false ;
    }
  }
  return true;
}
