const arr = new Array(10).fill().map((x, i) => i + 1);
const numberToGuess = Math.floor(Math.random() * 10);
let numberOfTries = 0;

function binarySearch(arr, numberToGuess, start, end) {
  if (start > end) {
    return null;
  } else {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === numberToGuess) {
      return mid;
    } else if (arr[mid] > numberToGuess) {
      return binarySearch(arr, numberToGuess, start, mid - 1);
    } else {
      return binarySearch(arr, numberToGuess, mid + 1, end);
    }
  }
}

const result = binarySearch(arr, numberToGuess, 0, arr.length - 1);
console.log(`Array -> ${arr}`);
console.log(
  result
    ? `Number to guess -> ${numberToGuess} | Value into array - > ${arr[result]} | Index -> ${result}.`
    : `Number to guess -> ${numberToGuess} | Result -> Number to guess isn't into array.`
);
