/*eslint-disable*/
import { analyzeArray } from './analyzeArray';

test('function is defined', () => {
  expect(analyzeArray()).toBeDefined();
});

test('function returns an object', () => {
  expect(typeof(analyzeArray())).toBe('object');
});

test('returns average number of an array', () => {
  expect(analyzeArray([5, 3, 8, 9, 10, 15]).average).toBe(8.3);
  expect(analyzeArray([20, 5, 8, 9, 10, 15]).average).toBe(11.2);
  expect(analyzeArray([5, 30, 8, 9, 40, 15]).average).toBe(17.8);
});

test('returns min number', () => {
  expect(analyzeArray([5, 3, 8, 9, 10, 15]).min).toBe(3);
  expect(analyzeArray([20, 5, 8, 9, 10, 15]).min).toBe(5);
  expect(analyzeArray([100, 30, 8, 9, 40, 15]).min).toBe(8);
});

test('returns max number', () => {
  expect(analyzeArray([5, 3, 8, 9, 10, 15]).max).toBe(15);
  expect(analyzeArray([20, 5, 8, 9, 10, 15]).max).toBe(20);
  expect(analyzeArray([100, 30, 8, 9, 40, 15]).max).toBe(100);
});

test('returns array length', () => {
  expect(analyzeArray([5, 3, 8, 9, 10, 15]).length).toBe(6);
  expect(analyzeArray([5, 3, 8]).length).toBe(3);
  expect(analyzeArray([5, 3, 8, 9, 10, 15, 7, 3, 4, 5]).length).toBe(10);
});