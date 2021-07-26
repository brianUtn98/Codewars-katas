const formatDuration = require("../formatDuration.js")

describe("",()=>{
    test("",()=>{
        expect(formatDuration(0)).toBe("now")
    })

    test("",()=>{
        expect(formatDuration(1)).toBe("1 second")
    })

    test("",()=>{
        expect(formatDuration(5)).toBe("5 seconds")
    })

    test("",()=>{
        expect(formatDuration(60)).toBe("1 minute")
    })

    test("",()=>{
        expect(formatDuration(120)).toBe("2 minutes")
    })

    test("",()=>{
        expect(formatDuration(125)).toBe("2 minutes and 5 seconds")
    })

    test("",()=>{
        expect(formatDuration(121)).toBe("2 minutes and 1 second")
    })

    test("",()=>{
        expect(formatDuration(65)).toBe("1 minute and 5 seconds")
    })

    test("",()=>{
        expect(formatDuration(3600)).toBe("1 hour")
    })

    test("",()=>{
        expect(formatDuration(7200)).toBe("2 hours")
    })

    test("",()=>{
        expect(formatDuration(3660)).toBe("1 hour and 1 minute")
    })

    test("",()=>{
        expect(formatDuration(3602)).toBe("1 hour and 2 seconds")
    })

    test("",()=>{
        expect(formatDuration(3662)).toBe("1 hour, 1 minute and 2 seconds")
    })

    test("",()=>{
        expect(formatDuration(86400)).toBe("1 day");
    })

    test("",()=>{
        expect(formatDuration(172800)).toBe("2 days")
    })

    test("",()=>{
        expect(formatDuration(172861)).toBe("2 days, 1 minute and 1 second")
    })

    test("",()=>{
        expect(formatDuration(31536000)).toBe("1 year")
    })

    test("",()=>{
        expect(formatDuration(94608000)).toBe("3 years")
    })

    test("",()=>{
        expect(formatDuration(94608120)).toBe("3 years and 2 minutes")
    })

    test("",()=>{
        expect(formatDuration(94608999)).toBe("3 years, 16 minutes and 39 seconds")
    })

    test("",()=>{
        expect(formatDuration(95608999)).toBe("3 years, 11 days, 14 hours, 3 minutes and 19 seconds")
    })

})
