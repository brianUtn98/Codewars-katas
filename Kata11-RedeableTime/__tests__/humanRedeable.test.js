const humanReadable = require('../humaRedeable.js')

describe('examples', function() {
   
      test("",()=>{
        expect(humanReadable(0)).toBe("00:00:00")
      })

      test("",()=>{
        expect(humanReadable(5)).toBe("00:00:05")
      })

      test("",()=>{
        expect(humanReadable(60)).toBe("00:01:00")
      })

      test("",()=>{
        expect(humanReadable(86399)).toBe("23:59:59")
      })

      test("",()=>{
        expect(humanReadable(359999)).toBe("99:59:59")
      })
  });