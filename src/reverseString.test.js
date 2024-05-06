/* eslint-disable */
import reverseString from './reverseString';

test('returns reversed string', () => {
  expect(reverseString('Apple')).toBe('elppA');
  expect(reverseString('Damnation')).toBe('noitanmaD');
})

test('returns reversed string even with spaces', () => {
  expect(reverseString('Hi I am Andrew.')).toBe('.werdnA ma I iH');
})