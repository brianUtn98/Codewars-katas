const comp = require("../comp.js")

describe("",()=>{
    test("",()=>{
        const a = [121, 144, 19, 161, 19, 144, 19, 11];
        const b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]; 
        expect(comp(a,b)).toBe(true)
    })

    test("",()=>{
        const a = [121, 144, 19, 161, 19, 144, 19, 11]  
        const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
        expect(comp(a,b)).toBe(true)
    })

    test("",()=>{
        const a = [121, 144, 19, 161, 19, 144, 19, 11]  
        const b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
        expect(comp(a,b)).toBe(false)
    })

    test("",()=>{
        const a = [121, 144, 19, 161, 19, 144, 19, 11]  
        const b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
        expect(comp(a,b)).toBe(false)
    })

    test("",()=>{
        const a = [121, 144, 19, 161, 19, 144, 19, 11];
        const b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144]; 
        expect(comp(a,b)).toBe(false)
    })

    test("",()=>{
        const a = [2, 3, 6, 5, 7, 0, 4, 7, 7, 0, 7, 4, 5, 4, 4, 1, 0, 10]
        const b = [0, 16, 49, 36, 25, 49, 0, 9, 4, 1, 16, 49, 25, 1, 16, 49, 100, 16]
        expect(comp(a,b)).toBe(false)
    })
})