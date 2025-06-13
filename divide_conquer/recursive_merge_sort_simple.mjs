const arr = [1, 22, 7, 33, 12];

function mergeArray(leftArray, rightArray) {
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      mergedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftArray.length) {
    mergedArray.push(leftArray[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArray.length) {
    mergedArray.push(rightArray[rightIndex]);
    rightIndex++;
  }
  return mergedArray;
}

function recursiveMergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const midPoint = Math.floor(arr.length / 2);
    const left = arr.slice(0, midPoint);
    const right = arr.slice(midPoint);
    return mergeArray(recursiveMergeSort(left), recursiveMergeSort(right));
  }
}

const mergedArray = recursiveMergeSort(arr);

console.log(mergedArray);
