const getSum = require("../getSum.js")

describe("Kata Get sum",()=>{
    test("",()=>{
        expect(getSum(1,0)).toBe(1)
    })

    test("",()=>{
        expect(getSum(1,2)).toBe(3)
    })

    test("",()=>{
        expect(getSum(0,1)).toBe(1)
    })

    test("",()=>{
        expect(getSum(1,1)).toBe(1)
    })

    test("",()=>{
        expect(getSum(-1,0)).toBe(-1)
    })

    test("",()=>{
        expect(getSum(0,-1)).toBe(-1)
    })
    test("",()=>{
        expect(getSum(-1,2)).toBe(2)
    })
    test("",()=>{
        expect(getSum(2,-1)).toBe(2)
    })

    test("",()=>{
        expect(getSum(2,5)).toBe(14)
    })

    
})