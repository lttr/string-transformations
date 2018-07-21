import { compose } from '../esm/compose.js'
import { removeWhitespace } from '../esm/removeWhitespace.js';
import { reverse } from '../esm/reverse.js';
import { upperCase } from '../esm/upperCase.js';

describe('compose', () => {
  it('should chain given methods and apply it on input', () => {
    const input = 'a b c'
    const expected = 'CBA'
    expect(compose(removeWhitespace, reverse, upperCase)(input)).toBe(expected)
  })
})