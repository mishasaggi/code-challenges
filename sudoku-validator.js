function validSolution(board){
var sum = 0;
for(var row=0; row<board.length; row++) {
  sum = 0;
  for(var col=0; col<board[0].length; col++){
    sum += board[row][col];
  }
  if(sum !== 45) return false;
}
for(var startR = 0; startR < 9; startR = startR+3) {
  for(var startC = 0; startC < 9; startC = startC+3){
    sum = 0;
    for(var row = startR; row < startR + 3; row++) {
      for(var col = startC; col < startC + 3; col++) {
        sum += board[row][col];
      }
    }
  if(sum !== 45) return false;
  }
}
  return true;
}
