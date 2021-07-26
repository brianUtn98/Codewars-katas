const {zero,one,two,three,four,five,six,seven,eight,nine,plus,minus,times, dividedBy} = require("../calcWithFunctions.js")

describe ("Kata calculating with functions",()=> {
    test("",()=> {
        expect(zero()).toBe(0);
    })

    test("",()=> {
        expect(one()).toBe(1);
    })

    test("",()=> {
        expect(two()).toBe(2);
    })

    test("",()=> {
        expect(three()).toBe(3);
    })

    test("",()=> {
        expect(four()).toBe(4);
    })

    test("",()=> {
        expect(five()).toBe(5);
    })

    test("",()=> {
        expect(six()).toBe(6);
    })

    test("",()=> {
        expect(seven()).toBe(7);
    })

    test("",()=> {
        expect(eight()).toBe(8);
    })

    test("",()=>{
        expect(nine()).toBe(9)
    })

    test("",()=>{
        expect(seven(times(five()))).toBe(35)
    })

    test("",()=>{
        expect(four(plus(nine()))).toBe(13)
    })

    test("",()=>{
        expect(eight(minus(three()))).toBe(5)
    })

    test("",()=>{
        expect(six(dividedBy(two()))).toBe(3)
    })
})