/*eslint-disable*/
import caesarCipher from './caesarCipher';

test('function is defined', () => {
  expect(caesarCipher()).toBeDefined();
})

test('returns ciphered string', () => {
  expect(caesarCipher('Kek', 7)).toBe('Rlr');
  expect(caesarCipher('Sonic', 4)).toBe('Wsrmg');
})