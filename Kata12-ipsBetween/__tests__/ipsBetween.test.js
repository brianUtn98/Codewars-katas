const ipsBetween = require("../ipsBetween.js");

describe("Kata Ips between", () => {
  it("", () => {
    expect(ipsBetween("10.0.0.1", "10.0.0.1")).toBe(0);
  });

  it("", () => {
    expect(ipsBetween("10.0.0.0", "10.0.0.50")).toBe(50);
  });

  it("", () => {
    expect(ipsBetween("20.0.0.10", "20.0.1.0")).toBe(246);
  });
});
