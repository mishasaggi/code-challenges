function findBall(scales) {
// call scales.getWeight() max 2 times
// return indexOfHeavyBall;
// 3, 3, 2
// 1, 1, 1
  var leftPan = [0, 1, 2]
  var rightPan = [3, 4, 5]
  var w = scales.getWeight(leftPan, rightPan);
  
  if(w === -1) {// left pan is heavier
    w = scales.getWeight([leftPan[0]], [leftPan[1]])
    if(w === -1) return leftPan[0]
    else if(w === 1) return leftPan[1]
    else if(w === 0) return leftPan[2]
  }
  else if(w === 1) {// right pan is heavier
    w = scales.getWeight([rightPan[0]], [rightPan[1]])
    if(w === -1) return rightPan[0]
    else if(w === 1) return rightPan[1]
    else if(w === 0) return rightPan[2]
  }
  else if(w === 0) { // last two
    leftPan = [6]
    rightPan = [7]
    w = scales.getWeight(leftPan, rightPan)
    if(w === -1) return leftPan[0]
    else if(w === 1) return rightPan[0]
  }
}
