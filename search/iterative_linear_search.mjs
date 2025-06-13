let sortedArray = [4, 8, 9, 14, 16, 24, 32, 43, 56, 68, 71, 84, 98];

const numberToFind = 32;

function linearSearch(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      console.log(`The good number is ${array[i]}. Finded after ${i + 1} try.`);
      return i + 1;
    }
    console.log(`Try ${i + 1} -> Result : ${array[i]}`);
  }
  return console.log("The number to find isn't in the array");
}

linearSearch(sortedArray, numberToFind);
