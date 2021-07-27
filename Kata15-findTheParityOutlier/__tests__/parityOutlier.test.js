const findOutlier = require("../parityOutlier.js")

describe("",()=>{
    test("",()=>{
        expect(findOutlier([1,2,4])).toBe(1)
    })

    test("",()=>{
        expect(findOutlier([2,5,6])).toBe(5)
    })

    test("",()=>{
        expect(findOutlier([0,102,3])).toBe(3)
    })

    test("",()=>{
        expect(findOutlier([1,3,6])).toBe(6)
    })

    test("",()=>{
        expect(findOutlier([3,4,5])).toBe(4)
    })

    test("",()=>{
        expect(findOutlier([0,3,1])).toBe(0)
    });
})