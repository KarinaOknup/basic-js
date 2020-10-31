const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed) {
  let turns = Math.pow(2,disksNumber)-1;
  let time = (turns * 3600 / turnsSpeed);
  let res= new Object();
  res.turns=turns;
  res.seconds=Math.floor(time);
return res

};
