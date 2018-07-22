import { normalizeWhitespace } from '../esm/normalizeWhitespace.js'

describe('normalizeWhitespace', () => {
  it('should replace multiple newlines with single space', () => {
    const input = `foo
    
    
    bar`
    const expected = 'foo bar'
    expect(normalizeWhitespace(input)).toBe(expected)
  })
})