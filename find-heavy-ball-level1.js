function findBall(scales) {
// call scales.getWeight() max 4 times. return indexOfHeavyBall;
    for (var i = 0; i < 4; i++) {
        var leftPan = [i+4]; //4,5,6,7
        var rightPan = [i]; //0,1,2,3
        var w = scales.getWeight(leftPan, rightPan);
        if (w === -1) {// left pan is heavier
          return leftPan[0];
        }
        if (w === 1) {// right pan is heavier
          return rightPan[0];
        }
    }
}
