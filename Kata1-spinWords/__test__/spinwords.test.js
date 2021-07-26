const spinWords = require('../spinWords.js')

describe('Spin words kata', () => {
    test("Un string con palabras de menos de 5 letras no se modifica",() => {
        expect(spinWords("This is a test")).toBe("This is a test")
    })

    test("Un string con palabras de mas de 5 letras se modifica",() => {
        expect(spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw")
    })


})