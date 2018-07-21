import { upperCase } from '../esm/upperCase.js'

describe('upperCase', () => {
  it('should produce uppercase letters for ASCII letters only', () => {
    const input = 'aBc'
    const expected = 'ABC'
    expect(upperCase(input)).toBe(expected)
  })
  it('should produce uppercase letters for letters with diacritics', () => {
    const input = 'áČŤ'
    const expected = 'ÁČŤ'
    expect(upperCase(input)).toBe(expected)
  })
})
