//iterative solution
var binarySearch = function(array, target) {
    var low = 0,
        high = array.length - 1,
        mid, //mid point is recalculated in every loop
        current; //element being compared to the target
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        current = array[mid];
        if (current < target) {
            low = mid + 1;
        } else if (current > target) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
