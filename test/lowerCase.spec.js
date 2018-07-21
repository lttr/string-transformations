import { lowerCase } from '../esm/lowerCase.js'

describe('lowerCase', () => {
  it('should produce lowercase letters for ASCII letters only', () => {
    const input = 'aBc'
    const expected = 'abc'
    expect(lowerCase(input)).toBe(expected)
  })
  it('should produce lowercase letters for letters with diacritics', () => {
    const input = 'áČŤ'
    const expected = 'áčť'
    expect(lowerCase(input)).toBe(expected)
  })
})
