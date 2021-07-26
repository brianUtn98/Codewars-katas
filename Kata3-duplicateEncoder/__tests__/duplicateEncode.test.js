const duplicateEncode = require("../duplicateEncode.js")

describe("Kata Duplicate Encode",() => {
    test("Letras no repetidas",()=> {
        expect(duplicateEncode("din")).toBe("(((")
    })

    test("Letras repetidas",()=>{
        expect(duplicateEncode("recede")).toBe("()()()")
    })

    test("Letras repetidas case insensitive",()=>{
        expect(duplicateEncode("Success")).toBe(")())())")
    })
    
    test("Caracteres repetidos con espacios",()=>{
        expect(duplicateEncode("(( @")).toBe("))((")
    })
})