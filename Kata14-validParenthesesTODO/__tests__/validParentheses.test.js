const validParentheses = require('../validParentheses.js')

describe('Kata valid parentheses', ()=>{

    test("",()=>{
        expect(validParentheses("(")).toBe(false)
    })

    test("",()=>{
        expect(validParentheses(")")).toBe(false)
    })

    test("",()=>{
        expect(validParentheses("(()")).toBe(false)
    })

    test("",()=>{
        expect(validParentheses("()()")).toBe(true)
    })

})