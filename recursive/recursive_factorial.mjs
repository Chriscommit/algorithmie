function factorialIterative(n) {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
}

function factorialRecursive(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorialRecursive(n - 1);
  }
}

// console.log(factorialIterative(5));
// console.log(factorialIterative(3));
// console.log(factorialRecursive(5));
console.log(factorialRecursive(3));
