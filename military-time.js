function toMilitary (time) {
  // Write your code here, and
  // return your final answer.
  
  //take the right of the : as is
  //take the left of : and add 12 hours to it
  //horribly long solution - refactor it.

  var right = "";
  var left = "";
  var suffix = time.slice(time.length-2, time.length);
  
  if (time.length > 5) right = time.slice(time.length-4, time.length-2);
  else right = time.slice(time.length-2, time.length);

  if(time.length === 4 || time.length === 7) left = time.slice(0,2);
  else left = time.slice(0,2);
  
  if(suffix === 'am') {
    if(left === '12') left = '00';
    else left = parseInt(left);
  }
  else if (suffix === 'pm') {
    if(left === '12') left = '12';
    else {
      left = parseInt(left);
      left = left+12;
    }
  }  
  
left = left.toString();
if (left.length === 1) left = '0'+left;

return (left+':'+right)
}
