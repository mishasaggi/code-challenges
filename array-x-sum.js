/*
You are given a 2D array with dimensions 6*6. 
An 'X' in an array is a subarray with odd numbered dimensions (3x3 for our problem),
shaped like:

a b c
  d
e f g
For example, if we create an hourglass using the number 1 within an array full of zeros, it may look like this:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
There are many hourglasses in the array above. 
The first three hourglasses from top left to right are the following:

1 1 1     1 1 0     1 0 0
  1         0         0
1 1 1     1 1 0     1 0 0
The sum of an hourglass is the sum of all the numbers within it. 
The sum for the hourglasses above are 7, 4, and 2, respectively.
*/

function hourGlassSum(arr){
    var sum = []
    for(var row=0; row<arr.length-2; row++){
        for(var col=0; col<arr.length-2; col++){
            sum.push(arr[row][col] + arr[row][col+1] + arr[row][col+2] + arr[row+1][col+1] + arr[row+2][col] + arr[row+2][col+1] + arr[row+2][col+2])
          }
    }
    console.log(sum);
    var arrayMax = Function.prototype.apply.bind(Math.max, null);
    var max = arrayMax(sum);
    console.log(max);
}

/*
hourGlassSum(
[ [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 9, 2, -4, -4, 0 ],
  [ 0, 0, 0, -2, 0, 0 ],
  [ 0, 0, -1, -2, -4, 0 ] ])

//result: 13
*/
