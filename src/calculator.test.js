/*eslint-disable*/
import calculator from './calculator';

test('calculator is defined', () => {
  expect(calculator()).toBeDefined();
})

test('returns sum of 2 numbers', () => {
  expect(calculator('add', 2, 3)).toBe(5);
  expect(calculator('add', 6, 4)).toBe(10);
  expect(calculator('add', 15, 5)).toBe(20);
  expect(calculator('add', -15, 5)).toBe(-10);
})

test('returns multiplication of 2 numbers', () => {
  expect(calculator('mult', 2, 3)).toBe(6);
  expect(calculator('mult', 6, 4)).toBe(24);
  expect(calculator('mult', 15, 5)).toBe(75);
  expect(calculator('mult', -15, 5)).toBe(-75);
})

test('returns division of 2 numbers', () => {
  expect(calculator('div', 6, 2)).toBe(3);
  expect(calculator('div', 60, 10)).toBe(6);
  expect(calculator('div', 15, 5)).toBe(3);
  expect(calculator('div', -100, -5)).toBe(20);
})

test('returns subtraction of 2 numbers', () => {
  expect(calculator('sub', 6, 2)).toBe(4);
  expect(calculator('sub', 60, 10)).toBe(50);
  expect(calculator('sub', 15, 5)).toBe(10);
  expect(calculator('sub', -100, -5)).toBe(-95);
})
