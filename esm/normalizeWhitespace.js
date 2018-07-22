/**
* Replaces multiple whitespace with single space.
*/
export const normalizeWhitespace = (input) => {
    return input.replace(/\s+/g,' ');
}