import ArrayGenerator from "../array_generator.mjs";
const array = ArrayGenerator(10, 10);

function swap(array, i, j) {
  if (j !== i) {
    const tmp = array[j];
    array[j] = array[i];
    array[i] = tmp;
  }
}
function partition(array, left, right) {
  const pivot = array[left];
  let i = left;
  for (let j = left + 1; j <= right; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i, left);
  return i;
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    const pivot = partition(array, left, right);
    quickSort(array, left, pivot - 1);
    quickSort(array, pivot + 1, right);
  }
}

console.log(`Array Generated -> ${array}`);
quickSort(array);
console.log(`Array sorted - > ${array}`);
