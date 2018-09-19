console.log(Math.min([ 4, 5, 6 ]));
function indexO(matrix,num){
  for (var j = 0; j < matrix.length; j ++){
      if (matrix[j] == num){
        return j
      }
  }
}
function merge(a,b){
  a = a.concat(b);
  console.log(a);
  console.log(a.length);
  console.log(Math.min(a));
  var arrayB=[];
  var index=0;
  var mini=0;
  var size = a.length;;
  for (var i = 0; i < size; i ++){
    mini = Math.min(a);
    console.log(mini);
    index = indexO(a,mini);
    arrayB[i]= mini;
    a.splice(index,1,99999);
    console.log(arrayB);
    console.log(a);
  }


return arrayB
}


///////////////////////////////////////////////
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
