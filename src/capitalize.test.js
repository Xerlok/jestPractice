/* eslint-disable */
import capitalize from './capitalize'

test('return string with first letter capitalized', () => {
  expect(capitalize('kek')).toBe('Kek');
  expect(capitalize('hI')).toBe('HI');
  expect(capitalize('bad')).toBe('Bad');
  expect(capitalize('Trap')).toBe('Trap');
})