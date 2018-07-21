import { reverse } from '../esm/reverse.js'

describe('reverse', () => {
  it('should reverse given string', () => {
    const input = 'foo'
    const expected = 'oof'
    expect(reverse(input)).toBe(expected)
  })
  it('should reverse given string with wierd characters', () => {
    const input = '#+ˇ úďĚ'
    const expected = 'Ěďú ˇ+#'
    expect(reverse(input)).toBe(expected)
  })
})