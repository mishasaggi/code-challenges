function greatestProduct(input) {
var largestProduct = 0;
for(var i=0; i<=input.length-5; i++) {
  var currentProduct = input[i]*input[i+1]*input[i+2]*input[i+3]*input[i+4];
  console.log(currentProduct);
  if(currentProduct > largestProduct) largestProduct = currentProduct;
}
return largestProduct;

}
