const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add1(2, 2)).toBe(4);
});

test("Adds 3 + 3", () => {
  expect(functions.add2(3, 3)).toBe(6);
});

test("Adds 3 + 3", () => {
  expect(functions.add2(3, 3)).not.toBe(10);
});

test("should be NULL", () => {
  expect(functions.isNull()).toBeNull();
});
