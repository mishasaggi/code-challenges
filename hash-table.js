//Your hash table need not resize itself, but should handle collisions.
  var makeHashTable = function(){
    var table = {};
    var storage = [];
    var storageLimit = 1000;

    table.insert = function(key, value){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      storage[index] = storage[index] || [];
      //assume pairs have been stored at the index
      var bucket = storage[index];
      //iterate over all arrays at the index and find the key
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          //replace old with new value to handle collisions
          bucket[i][1] = value;
        }
      }
      bucket.push([key, value]);
      storage[index] = bucket;
    };

    table.retrieve = function(key){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      //assume pairs have been stored at the index
      var bucket = storage[index];
      if(!bucket) return;
      //iterate over all arrays at the index and find the key
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          //replace old with new value to handle collisions
          return bucket[i][1];
        }
      }
      return;
    };

    table.remove = function(key){
      var index = getIndexBelowMaxForKey(key, storageLimit);
      //assume pairs have been stored at the index
      var bucket = storage[index];
      //iterate over all arrays at the index and find the key
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          //return and delete
          var result = bucket[i][1];
          delete bucket[i][1]
          return result;
        }
      }
    }
    return table;  
  };  
 var getIndexBelowMaxForKey = function(str, max){
   var hash = 0;
   for (var i = 0; i < str.length; i++) {
     hash = (hash<<5) + hash + str.charCodeAt(i);
     hash = hash & hash; // Convert to 32bit integer
     hash = Math.abs(hash);
   }
   return hash % max;
 };
