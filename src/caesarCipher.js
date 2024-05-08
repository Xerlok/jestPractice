/*eslint-disable*/
function caesarCipher(string, shift) {
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
    const LowerCase = isLowerCase(word[i]);
    const UpperCase = isUpperCase(word[i]);

    word[i] = word[i].toLowerCase();
    word[i] = alphabet.indexOf(word[i]);
    const moduloOfIndex = (word[i] + shift) % 26;
    if (LowerCase) {
      word[i] = alphabet[moduloOfIndex];
    }
    if (UpperCase) {
      word[i] = alphabet[moduloOfIndex].toUpperCase();
    }
  }

  return word.join('');
}

function isUpperCase(letter) {
  if (letter === letter.toUpperCase()
    && letter !== letter.toLowerCase()) {
      return true;
  }
  return false;
}

function isLowerCase(letter) {
  if (letter === letter.toLowerCase()
    && letter !== letter.toUpperCase()) {
      return true;
  }
  return false;
}

export {
  caesarCipher,
}
