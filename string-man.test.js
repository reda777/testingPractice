const {capitalize,reverseString,calculator}=require("./string-man");
//capitalize
it("Simple string",()=>{
    expect(capitalize("string")).toBe("String");
})
it("One char string",()=>{
    expect(capitalize("s")).toBe("S");
})
it("Empty string",()=>{
    expect(capitalize("")).toBe("");
})
//reverseString
it("Reverse simple string",()=>{
    expect(reverseString("string")).toBe("gnirts");
})
it("Reverse one string",()=>{
    expect(reverseString("s")).toBe("s");
})
it("Reverse empty string",()=>{
    expect(reverseString("")).toBe("");
})
//calculator
it("Addition",()=>{
    expect(calculator.add(2,3)).toBe(5);
    expect(calculator.add("1","1")).toBe(2);
})
it("Subtract",()=>{
    expect(calculator.sub(2,3)).toBe(-1);
    expect(calculator.sub("1","1")).toBe(0);
})
it("Divide",()=>{
    expect(calculator.div(4,2)).toBe(2);
    expect(calculator.div("1","1")).toBe(1);
})
it("Multiply",()=>{
    expect(calculator.mul(4,2)).toBe(8);
    expect(calculator.mul("1","1")).toBe(1);
})