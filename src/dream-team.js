const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
if(Array.isArray(members)){
let str='';
members.forEach(name => {
  if(typeof name === 'string'){
    name=name.replace(/\s/g, '');
    if(name.length!==0){
    str=`${str}${name[0]}`
    } 
}
});
return str.toUpperCase().split('').sort().join('');
}
return false;
};
