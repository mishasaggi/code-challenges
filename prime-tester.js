function primeTester (n) {
//few initial eliminations then check under sqrt of given number 
//by brute force
  var checkUnderNumber = Math.ceil(Math.sqrt(n));
  if (n <= 1) return false;
  else if ((n !==2 ) && (n%2 === 0)) return false;
  else if ((n !==3 ) && (n%3 === 0)) return false;

  for(var divisor=checkUnderNumber; divisor>2; divisor--){
    if(n%divisor===0) return false;
    }
    return true;
}
