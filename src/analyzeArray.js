/*eslint-disable*/
function analyzeArray(array) {
  if (!array) { return {}; }

  const data = {
    average: findAverage(array),
    min: findMin(array),
    max: findMax(array),
    length: array.length
  }
  
  return data;
}

function findAverage(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    sum = sum + array[i];
  }

  return Math.round(((sum / array.length) + Number.EPSILON) * 10) / 10;
}

function findMax(array) {
  let maxNumber = null;
  let previousNumber = null;

  for (let i = 0; i < array.length; i += 1) {
    if (previousNumber === null) {
      maxNumber = array[i];
      previousNumber = array[i];
      continue;
    }
    if (array[i] > previousNumber) {
      maxNumber = array[i];
      previousNumber = array[i];
    }
  }

  return maxNumber;
}

function findMin(array) {
  let minNumber = null;
  let previousNumber = null;

  for (let i = 0; i < array.length; i += 1) {
    if (previousNumber === null) {
      minNumber = array[i];
      previousNumber = array[i];
      continue;
    }
    if (array[i] < previousNumber) {
      minNumber = array[i];
      previousNumber = array[i];
    }
  }

  return minNumber;
}

export { analyzeArray }