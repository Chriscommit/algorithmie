import arrayGenerator from "../array_generator.mjs";

function bubbleSort(array) {
  const n = array.length;

  for (let i = n - 1; i > 0; i--) {
    let arrayIsSorted = true;

    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        arrayIsSorted = false;
      }
    }
    if (arrayIsSorted) {
      break;
    }
  }
  return array;
}

const arraySorted = bubbleSort(arrayGenerator(20, 200));
console.log(arraySorted);
