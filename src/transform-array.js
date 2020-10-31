const CustomError = require("../extensions/custom-error");


module.exports = function transform( arr ) {
  if(!Array.isArray(arr))throw new Error();
  let arr2=arr;
  let point;
  let i=0;
  
  do{
  switch(true){
  
  case (arr2.includes('--discard-prev')):
  point = arr2.indexOf('--discard-prev');
  if(point!=0){
  arr2.splice(point-1,1);
  arr2.splice(point-1,1);
  }
  else arr2.splice(point,1);
  break;
  
  case (arr2.includes('--discard-next')):
  point = arr2.indexOf('--discard-next'); 
  if(arr2[point+2]==='--discard-prev'||arr2[point+2]==='--double-prev')arr2.splice(point+2,1);
  if(point!=arr2.length - 1){
  arr2.splice(point+1,1);
  arr2.splice(point,1);
  }
  else arr2.splice(point,1);
  break;
  
  case (arr2.includes('--double-next')):
  point = arr2.indexOf('--double-next');
  if(arr2[point+2]==='--double-prev') arr2.splice(point+2,1);
  if(point!=arr2.length - 1) arr2[point]=arr2[point+1] ;
  else arr2.splice(point,1);
  break;
  
  case (arr2.includes('--double-prev')):
  point = arr2.indexOf('--double-prev');
  if(point!=0) arr2[point]=arr2[point-1];
  else arr2.splice(point,1);
  
  default:
    i=1;
    break;
  }
}while (i===0)
  return arr2;
  };
