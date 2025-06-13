import arrayGenerator from "../array_generator.mjs";
const arr = arrayGenerator(10, 10);
const numberToGuess = Math.floor(Math.random() * 10);
let numberOfTries = 0;

function binarySearch(arr, numberToGuess) {
  console.log(`Array generated -> ${arr}`);
  console.log(`Number to guess -> ${numberToGuess}`);
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const middleIndex = Math.floor((min + max) / 2);
    const guess = arr[middleIndex];
    numberOfTries++;
    if (guess === numberToGuess) {
      console.log(
        `La valeur recherchée "${numberToGuess}" se trouve à l'index -> ${middleIndex} -> après ${numberOfTries} essais.`,
        middleIndex
      );
      return middleIndex;
    } else if (guess > numberToGuess) {
      max = middleIndex - 1;
    } else {
      min = middleIndex + 1;
    }
  }
  console.log(`The number to guess isn't finded into the array.`);
  return null;
}

binarySearch(arr, numberToGuess);
