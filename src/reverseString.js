/* eslint-disable */
export default function reverseString(string) {
  const letters = [];

  for (let i = 0; i < string.length; i += 1) {
    letters.push(string.charAt(i));
  }

  return letters.reverse().join('');
}