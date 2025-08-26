const { mwst, brutto } = require("./mehrwertsteuer.js");

test("7% von 100 ergeben 7", () => {
  expect(mwst(100, 0.07)).toBe(7);
});

test("19% von 200 ergeben 38", () => {
  expect(mwst(200)).toBe(38);
});

test("0% von 100 ergeben 0", () => {
  expect(mwst(100, 0)).toBe(0);
});

test("100 netto bei 19% ergeben 119 brutto", () => {
  expect(brutto(100)).toBe(119);
});

test("50 netto bei 7% ergeben 53,5 brutto", () => {
  expect(brutto(50, 0.07)).toBe(53.5);
});
