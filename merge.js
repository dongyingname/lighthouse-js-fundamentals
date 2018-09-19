function merge(arrayA,arrayB){

  var arrayNew = arrayA.concat(arrayB);

  var num = 0;
  for (var i = 0;i < arrayNew.length;i ++){
    for (var j = 0;j < arrayNew.length;j ++){
      if (arrayNew[j] > arrayNew[j + 1]) {
        num = arrayNew[j];
        arrayNew[j] = arrayNew[j + 1];
        arrayNew[j + 1] = num;
      }
    }

  }
  return arrayNew;
}


///////////////////////////////////////////////
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
