const longestConsec = require("../longestConsec.js");

describe("Kata Longest consec", () => {
  test("", () => {
    const starr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
    expect(longestConsec(starr, 2)).toBe("folingtrashy");
  });

  test("",()=>{
      const starr = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"]
      expect(longestConsec(starr,2)).toBe("abigailtheta");
  })

  test("",()=>{
      expect(longestConsec([],3)).toBe("")
  })

  test("",()=>{
      expect(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"],-2))
  })

  test("",()=>{
      expect(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)).toBe("")
  })

  test("",()=>{
      expect(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)).toBe("")
  })

  test("",()=>{
      expect(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"],1)).toBe("oocccffuucccjjjkkkjyyyeehh")
  })

  test("",()=>{
      expect(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)).toBe("ixoyx3452zzzzzzzzzzzz")
  })
});
