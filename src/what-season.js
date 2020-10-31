const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
  let mounth;
  let res;
  if (date === undefined){
    return "Unable to determine the time of year!"
  }
  else if (isNaN(date.valueOf()) && date instanceof Date ) throw new Error();
  else {
    mounth=date.getMonth();
    switch(mounth){
      case 11:
      res='winter';
      break;
      case 0:
      res='winter';
      break;
      case 1:
      res='winter';
      break;
  
      case 2:
      res='spring';
      break;
      case 3:
      res='spring';
      break;
      case 4:
      res='spring';
      break;
  
      case 5:
      res='summer';
      break;
      case 6:
      res='summer';
      break;
      case 7:
      res='summer';
      break;
  
      case 8:
      res='autumn';
      break;
      case 9:
      res='autumn';
      break;
      case 10:
      res='autumn';
      break;
  
  
    }
  }
  return res
  };
