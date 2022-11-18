function capitalize(str){
    return str && str[0].toUpperCase() + str.slice(1);
}
function reverseString(str){
    return [...str].reverse().join("");
}
const calculator={
    add:(a,b)=>Number(a)+Number(b),
    sub:(a,b)=>a-b,
    mul:(a,b)=>a*b,
    div:(a,b)=>a/b
}
module.exports={capitalize,reverseString,calculator};