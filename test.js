const { getGreeting, sumNums } = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting("Sam")).toBe("Hi Sam");
});

test('adds two numbers together', () => {
  expect(sumNums(3, 7)).toBe(10);
});