/*
A robot located at the top left corner of an n x n grid is trying to reach the bottom right corner. 
The robot can move either up, down, left, or right, but cannot visit the same spot twice. 
How many possible unique paths are there to the bottom right corner?
Make your solution work for a grid of any size.
*/

/* helper functions */

function makeBoard(n) {
  var board = []
  for (var i = 0; i < n; i++) {
    board.push([])
    for (var j = 0; j < n; j++) {
      board[i].push(false)
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j]
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j]
  }
  return board
}

/* challenge code */
//use recursion
function robotPaths (n, board, i, j) {
  //initialize a board
  if(!board) {
    board = makeBoard(n);
    i = 0;
    j = 0;
  }
  //invalid moves, return
  if (i < 0 || i >= n || j < 0 || j >= n || board.hasBeenVisited(i, j)) {
    return 0;
  }
  //base case: reached last square, return
  if (i === n-1 && j === n-1) {
    return 1;
  }
  //if move is valid and last square has not been reached, set piece
  board.togglePiece(i, j);
  //add the four possibilities of a move from a single square
  var solutions = robotPaths(n, board, i, j+1) + robotPaths(n, board, i, j-1) 
                + robotPaths(n, board, i+1, j) + robotPaths(n, board, i-1, j);
  //backtracking
  board.togglePiece(i, j);
  return solutions;
}

  //non-recursive solution
  //for over rows and columns
  //select the next move by using four increment rules
  //check to see if the selected move is valid: on the board and not yet visited
  //yes: mark the next move, rollback. no: check another rule, rollback
  //if at the final square, check against current set of solutions, if unique save solution
  //update counter
