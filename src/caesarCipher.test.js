/*eslint-disable*/
import { experiments } from 'webpack';
import { caesarCipher } from './caesarCipher';

test('function is defined', () => {
  expect(caesarCipher()).toBeDefined();
});

test('handles null string', () => {
  expect(caesarCipher(2)).toBe(null);
});

test('handles null shift', () => {{
  expect(caesarCipher('Kek')).toBe('Nhn');
}});

test('returns ciphered string', () => {
  expect(caesarCipher('Kek', 7)).toBe('Rlr');
  expect(caesarCipher('Sonic', 4)).toBe('Wsrmg');
});

test('handles positive shift overflow', () => {
  expect(caesarCipher('Kek', 155)).toBe('Jdj');
});

test('returns correct upper cases', () => {
  expect(caesarCipher('mAndAloriAn', 9)).toBe('vJwmJuxarJw');
  expect(caesarCipher('PROcrastiNATION', 8)).toBe('XZWkziabqVIBQWV');
});

test('returns correct punctuation', () => {
  expect(caesarCipher('!gIMba,l.')).toBe('!jLPed,o.');
});