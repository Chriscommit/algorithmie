import arrayGenerator from "../array_generator.mjs";

function insertionSort(array) {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    let current = array[i];
    let j = i;
    while (j > 0 && current < array[j - 1]) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = current;
  }
  return array;
}

const arraySorted = insertionSort(arrayGenerator(20, 200));
console.log(arraySorted);
