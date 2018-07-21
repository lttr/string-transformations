import { removeWhitespace } from '../esm/removeWhitespace.js'

describe('removeWhitespace', () => {
  it('should remove every whitespace from input', () => {
    const input = ' \t\n'
    const expected = ''
    expect(removeWhitespace(input)).toBe(expected)
  })
  it('should remove repeating whitespace from input', () => {
    const input = `foo     
         bar`
    const expected = 'foobar'
    expect(removeWhitespace(input)).toBe(expected)
  })
})
