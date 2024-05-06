/*eslint-disable*/
export default function caesarCipher(string, shift) {
  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
  ];

  const word = [];

  if (!string || typeof string !== 'string') { return null; }
  if (!shift) { shift = 3 }

  for (let i = 0; i < string.length; i += 1) {
    word.push(string.charAt(i));
  }

  for (let i = 0; i < word.length; i += 1) {
    word[i] = word[i].toLowerCase();
    word[i] = alphabet.indexOf(word[i]);
    word[i] = alphabet[word[i] + shift];
  }

  word[0] = word[0].toUpperCase();
  return word.join('');
}