  var array = [];
  for (var i = 0; i < n; i++) {
    array.push([]);
    for (var j = 0; j < n; j++) {
     array[i].push(i === j || i + j === n - 1 ? 1 : 0);
    }
  }
  return array;
}
