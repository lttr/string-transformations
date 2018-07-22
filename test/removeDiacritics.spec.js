import { removeDiacritics } from '../esm/removeDiacritics.js'

describe('removeDiacritics', () => {
  it('should remove diacritics from Czech sentence', () => {
    const input = 'Příliš žluťoučký kůň pěl Ďábelské Ódy.'
    const expected = 'Prilis zlutoucky kun pel Dabelske Ody.'
    expect(removeDiacritics(input)).toBe(expected)
  })
})