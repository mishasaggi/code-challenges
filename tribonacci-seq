function tribonacci(signature,n){
//the instructions for edge cases was incomplete, 
//these were figured out but hit and trail at first and then
//by looking at other test output as it became available 
if(signature.length < 3) return [];
else if(signature.length < 3 && n === 0) return [];
else if(signature.length < 3 && n < 3) return [1];
else if(signature.length > 0 && n < 3) return signature.splice(0,n);
  var prev2 = signature[0];
  var prev = signature[1];
  var current = signature[2];
  var sequence = signature.slice();
  for(var i = 3; i < n; ++i){
    var temp = current;
    current += (prev + prev2);
    prev2 = prev;
    prev = temp;
    sequence.push(current);
  }
  return sequence;  
}
