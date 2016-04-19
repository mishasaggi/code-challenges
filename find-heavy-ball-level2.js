function findBall(scales) {
// call scales.getWeight() max 3 times
// return indexOfHeavyBall;
  for (var i = 0; i < 2; i++) {
    var leftPan = [i+4, i+6]; //[4,6], [5,7]
    var rightPan = [i, i+2]; //[0,2], [1,3]
    var w = scales.getWeight(leftPan, rightPan);
    if (w === -1) {// left pan is heavier
      w = scales.getWeight([leftPan[0]],[leftPan[1]]);
      if (w === -1) return leftPan[0];
      else return leftPan[1];
    }
    if (w === 1) {// right pan is heavier
      w = scales.getWeight([rightPan[0]],[rightPan[1]]);
      if (w === -1) return rightPan[0];
      else return rightPan[1];
    }
  }
}
