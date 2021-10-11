const { getGreeting, sumNums, subtractNums, multiplyNums, divideNums } = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting("Sam")).toBe("Hi Sam");
});

test('adds two numbers together', () => {
  expect(sumNums(3, 7)).toBe(10);
});

test('subtracts two numbers', () => {
  expect(subtractNums(10, 3)).toBe(7);
});

test('multiply two numbers together', () => {
  expect(multiplyNums(4, 5)).toBe(20);
});

test('divide two numbers', () => {
  expect(divideNums(10, 5)).toBe(2);
});