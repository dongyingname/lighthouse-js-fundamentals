function lastIndexOf(array,num){

  var size = array.length;
  var index = 0;
  var count = 0;
  if (array.length == 0){
    index = -1;
  }
  else {
    for (var i = (size - 1); i >= 0; i --){
      count++;
      if (array[i] == num){
        index = i;
        break;
      }
      else if (count == array.length){
        index = -1;
      }
    }
  }
  return index;
}



////////////////////////////////////////

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);


