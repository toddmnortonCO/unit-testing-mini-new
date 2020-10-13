import { add } from '../utils/functions'

test("should add two integers", () => {
    expect(add(1, 2)).toBe(3);
});

test("add handles string inputs that are numbers", () => {
  expect(add("3", "4")).toBe(7);
});

test(`add returns NaN if non numbers are passed`, () => {
  expect(add("hello", "world")).toBeNaN();
});

