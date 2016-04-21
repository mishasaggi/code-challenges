function fractionConverter (number) {
  var numerator = 1.0;
  var denominator = 1.0;
  if (number === 0.0){ //edge case
    return "0/1";
  }
  var isNegative = number < 0.0;
  if (isNegative){
    //make it positive so while loop works
    number = number - number*2;
  }
  while (numerator/denominator !== number){
    if (numerator/denominator < number){
        numerator++;
        denominator--;
    } else if (numerator/denominator > number){
        denominator++;
    }
  }
  if (isNegative){
    //return negative result for negative numbers
    return "-"+numerator.toString() + "/" + denominator.toString();
  }
  //else return positive result
  return numerator.toString() + "/" + denominator.toString();
};
