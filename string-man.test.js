const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./string-man");
//capitalize
it("Simple string", () => {
  expect(capitalize("string")).toBe("String");
});
it("One char string", () => {
  expect(capitalize("s")).toBe("S");
});
it("Empty string", () => {
  expect(capitalize("")).toBe("");
});
//reverseString
it("Reverse simple string", () => {
  expect(reverseString("string")).toBe("gnirts");
});
it("Reverse one string", () => {
  expect(reverseString("s")).toBe("s");
});
it("Reverse empty string", () => {
  expect(reverseString("")).toBe("");
});
//calculator
it("Addition", () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add("1", "1")).toBe(2);
});
it("Subtract", () => {
  expect(calculator.sub(2, 3)).toBe(-1);
  expect(calculator.sub("1", "1")).toBe(0);
});
it("Divide", () => {
  expect(calculator.div(4, 2)).toBe(2);
  expect(calculator.div("1", "1")).toBe(1);
});
it("Multiply", () => {
  expect(calculator.mul(4, 2)).toBe(8);
  expect(calculator.mul("1", "1")).toBe(1);
});
//caesarCipher
it("simple shifting", () => {
  expect(caesarCipher("abc", 2)).toBe("cde");
});
it("same case shifting", () => {
  expect(caesarCipher("aBc", 2)).toBe("cDe");
});
it("a and z case", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("abc", -3)).toBe("xyz");
});
it("Punctuation", () => {
  expect(caesarCipher("xy!", 2)).toBe("za!");
});
//analyzeArray
it("Analyze simple array", () => {
  expect(analyzeArray([1, 2, 6])).toStrictEqual({
    average: 3,
    min: 1,
    max: 6,
    length: 3,
  });
});
it("Analyze empty array", () => {
  expect(analyzeArray([])).toStrictEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});
it("Analyze array with single value", () => {
  expect(analyzeArray([5])).toStrictEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});
it("Analyze array with negative values", () => {
  expect(analyzeArray([1, -5, 8, -2])).toStrictEqual({
    average: 0.5,
    min: -5,
    max: 8,
    length: 4,
  });
});
