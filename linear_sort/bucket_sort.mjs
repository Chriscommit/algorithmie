function getMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min, max };
}

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

function bucketSort(arr) {
  const { min, max } = getMinMax(arr);
  const n = arr.length;
  const h = (max - min) / n;
  const buckets = [];
  for (let i = 0; i < n; i++) {
    buckets[i] = [];
  }
  for (let i = 0; i < n; i++) {
    let k = 0;
    while (min + h * (k + 1) < arr[i]) {
      k++;
    }
    buckets[k].push(arr[i]);
  }
  for (let i = 0; i < n; i++) {
    insertionSort(buckets[i]);
  }
  let result = [];
  for (let i = 0; i < n; i++) {
    result = result.concat(buckets[i]);
  }
  return result;
}
const arr = [2, 1, 1, 23, 4, 0, 121, 5, 54, 1, 32, 5000];
console.log(`Array unsorted -> `,arr)
console.log(`Array sorted - > `,bucketSort(arr))