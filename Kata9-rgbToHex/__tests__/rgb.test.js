const rgb = require('../rgb.js')

describe('Kata RGB to Hex',()=>{

    test("",()=>{
        expect(rgb(255,255,255)).toBe("FFFFFF")
    })

    test("",()=>{
        expect(rgb(255, 255, 300)).toBe("FFFFFF")
    })

    test("",()=>{
        expect(rgb(0,0,0)).toBe("000000")
    })

    test("",()=>{
        expect(rgb(148, 0, 211)).toBe("9400D3")
    })

    test("",()=>{
        expect(rgb(0, 0, -20)).toBe("000000")
    })

    test("",()=>{
        expect(rgb(300,255,255)).toBe("FFFFFF")
    })

    test("",()=>{
        expect(rgb(173,255,47)).toBe("ADFF2F")
    })
})