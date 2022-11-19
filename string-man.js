function capitalize(str) {
  return str && str[0].toUpperCase() + str.slice(1);
}
function reverseString(str) {
  return [...str].reverse().join("");
}
const calculator = {
  add: (a, b) => Number(a) + Number(b),
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => a / b,
};
function mod(n, m) {
  return ((n % m) + m) % m;
}
function callback(char) {
  let code = char.charCodeAt(0);
  let shift = this.shift > 0 ? this.shift : mod(this.shift, 26);
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(mod(code - 65 + shift, 26) + 65);
  }
  if (code >= 97 && code <= 122) {
    return String.fromCharCode(mod(code - 97 + shift, 26) + 97);
  }
  return char;
}
function caesarCipher(str, shift) {
  return str.split("").map(callback, { shift: shift }).join("");
}
function analyzeArray(arr) {
  return {
    average:
      arr == false
        ? null
        : arr.reduce((acc, value) => acc + value / arr.length, 0),
    min: arr == false ? null : arr.reduce((a, b) => (a < b ? a : b)),
    max: arr == false ? null : arr.reduce((a, b) => (a > b ? a : b)),
    length: arr.length,
  };
}
module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
