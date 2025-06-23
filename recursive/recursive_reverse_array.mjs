function reverseArrayIteratif(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let tmpArray = new Array(end);
    let tmpIndex = 0;
    for (let i = end; i >= 0; i--) {
      tmpArray[tmpIndex] = arr[i];
      tmpIndex++;
    }
    return tmpArray;
  }
}

function reverseArrayRecursif(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    reverseArrayRecursif(arr, start + 1, end - 1);
  }
}

const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Iteratif -> ", reverseArrayIteratif(testArray));
reverseArrayRecursif(testArray);
console.log("Recursif -> ", testArray);
