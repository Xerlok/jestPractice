/*eslint-disable*/
export default function calculator(operation, numOne, numTwo) {
  switch (operation) {
    case 'add':
      return numOne + numTwo;
    case 'mult':
      return numOne * numTwo;
    case 'div':
      return numOne / numTwo;
    case 'sub':
      return numOne - numTwo;
  }
  return null;
}