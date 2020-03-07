const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add1(2, 2)).toBe(4);
});
