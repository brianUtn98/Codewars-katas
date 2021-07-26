const {digPow,getDigits} = require("../digPow.js")

describe("Get digits",()=>{
    test("",()=>{
        expect(getDigits(1)).toStrictEqual([1])
    })

    test("",()=>{
        expect(getDigits(12)).toStrictEqual([1,2])
    })

    test("",()=>{
        expect(getDigits(432)).toStrictEqual([4,3,2])
    })

    test("",()=>{
        expect(getDigits(15500)).toStrictEqual([1,5,5,0,0])
    })

})

describe("Kata Dig Pow",()=>{
    test("",()=>{
        expect(digPow(89, 1)).toBe(1)
    })

    test("",()=>{
        expect(digPow(92, 1)).toBe(-1)
    })

    test("",()=>{
        expect(digPow(46288, 3)).toBe(51)
    })

    test("",()=>{
        expect(digPow(695, 2)).toBe(2)
    })

    test("",()=>{
        expect(digPow(89, 1)).toBe(1)
    })

    test("",()=>{
        expect(digPow(89, 1)).toBe(1)
    })
})