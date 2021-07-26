const { expect } = require("@jest/globals")
const descendingOrder = require("../descendingOrder.js")

describe("Descending Order Kata",() => {
    test("Numero de un digito queda igual",() => {
        expect(descendingOrder(1)).toBe(1)
    })

    test("Numero palindramo no queda igual",()=>{
        expect(descendingOrder(121)).toBe(211);
    })

    test("Numero secuencial queda igual",()=>{
        expect(descendingOrder(111)).toBe(111)
    })

    test("Numero de digitos distintos y no palindramo queda en orden descendiente",()=>{
        expect(descendingOrder(1234)).toBe(4321)
    })

    test("",() => {
        expect(descendingOrder(15)).toBe(51)
    })

    test("",()=> {
        expect(descendingOrder(123456789)).toBe(987654321)
    })

    test("",() =>{
        expect(descendingOrder(1021)).toBe(2110)
    })
})