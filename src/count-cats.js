const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let k = 0;
  if (matrix.length!==0) {
    matrix.forEach(arr2 => {
      if(arr2.length!==0) arr2.forEach(a=>{
                                      if(a==='^^')k+=1 
                                    })
      } )
  };
 return k;
 }
