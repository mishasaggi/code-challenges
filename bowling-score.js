var bowlingScore = function(rolls) {
  //only the final score is required not the running score as rounds the played
  //ignore more than 20 inputs incase of no strikes and more than 20 - n* no. strikes
  var score = [];
  var strike = false, 
      spare  = false;
  var strikes = 0;
  for (var i = 0; i < rolls.length; i++) {

    
  //make sure to read in pairs unless encountering strikes
    if (spare) {
      // if the last round was a spare, add current score to last round's score and unset flag
      score[score.length-1] = score[score.length-1] + rolls[i];
      spare = false;
    }
    else if (strike) {
    // if the last round was a spare, add current two scores to last round's score and unset flag
      score[score.length-1] = score[score.length-1] + rolls[i] + rolls[i+1];
      strike = false;
    }
    //last round is incomplete and getting clipped so handle the last frame seperately
    if(score.length === 10 && !spare && !strike) break;
    else if(score.length === 10 && spare) {
      score[score.length-1] = score[score.length-1] + rolls[i+1];
      break;
    } else if(score.length === 10 && strike){
      score[score.length-1] = score[score.length-1] + rolls[i+1] + rolls[i+2];
      break;
    }
    //check for strike, set flag
    if(rolls[i] === 10) {
      strike = true;
      strikes++;
      score.push(rolls[i]);
      //aggregate the rounds score - do nothing
    } //according to the test cases, the next score will be for a new round
    //check for spare, set flag
    else if(rolls[i] + rolls[i+1] === 10) {
      spare = true;
      score.push(rolls[i]);
      score.push(rolls[i+1]);
      //aggregate the round's score
      score.push(score.pop() + score.pop());
      //increment i to go to the next round
      i++;
    }
    else {
      //not a special round, just add scores from two balls and sum them up
      score.push(rolls[i]);
      score.push(rolls[i+1]);
      //aggregate the round's score
      score.push(score.pop() + score.pop());
      //increment i to go to the next round
      i++;
    }
  }
  score = score.reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
});
  return score;
}
