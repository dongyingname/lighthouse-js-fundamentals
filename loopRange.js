function range(start,end,step){
  var some_array = [];
  var count = (end - start) / step;
  for (var i = 0; i <= Math.floor(count);i++){
    some_array[i] = start + i * step;
  }
  return some_array;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));