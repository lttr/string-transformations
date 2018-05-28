import { upperCase } from "../src/upperCase.js";

test('uppercase is uppercase', () => {
  const input = 'aBc'
  const expected = 'ABC'
  expect(upperCase(input)).toBe(expected)
})
