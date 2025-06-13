import array_generator from "../array_generator.mjs";
const arr = array_generator(5, 5);
console.log(`Array generated -> `, arr);

function mergeArray(arr, left, mid, right) {
  const leftArrayLength = mid - left + 1;
  const rightArrayLength = right - mid;
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < leftArrayLength; i++) {
    leftArray[i] = arr[left + i];
  }

  for (let i = 0; i < rightArrayLength; i++) {
    rightArray[i] = arr[mid + i + 1];
  }

  let leftIndex = 0;
  let rightIndex = 0;
  let indexToFill = left;
  while (leftIndex < leftArrayLength && rightIndex < rightArrayLength) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      arr[indexToFill] = leftArray[leftIndex];
      leftIndex++;
    } else {
      arr[indexToFill] = rightArray[rightIndex];
      rightIndex++;
    }
    indexToFill++;
  }

  while (leftIndex < leftArrayLength) {
    arr[indexToFill] = leftArray[leftIndex];
    indexToFill++;
    leftIndex++;
  }

  while (rightIndex < rightArrayLength) {
    arr[indexToFill] = rightArray[rightIndex];
    indexToFill++;
    rightIndex++;
  }
}

function recursiveMergeSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    // console.log(`Division totale du tableau d'entrée.`);
    return null;
  } else {
    const mid = Math.floor((left + right) / 2);
    // console.log(`1 - First Recursive Merge sort :`);
    recursiveMergeSort(arr, left, mid);
    // console.log(`2 - Second Recursive Merge sort :`);
    recursiveMergeSort(arr, mid + 1, right);
    // console.log(`Merge Array in MergeSort :`);
    return mergeArray(arr, left, mid, right);
  }
}

recursiveMergeSort(arr);

console.log(arr);
