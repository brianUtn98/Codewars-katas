const toCamelCase = require('../toCamelCase.js');

describe("Kata To camel case",()=>{
    it("",()=>{
        expect(toCamelCase("")).toBe("")
    })

    it("",()=>{
        expect(toCamelCase("the_stealth_warrior")).toBe("theStealthWarrior")
    })

    it("",()=>{
        expect(toCamelCase("The-Stealth-Warrior")).toBe("TheStealthWarrior")
    })

    it("",()=>{
        expect(toCamelCase("A-B-C")).toBe("ABC")
    })
})