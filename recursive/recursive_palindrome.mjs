// K A Y A K
// Index 0 - 4
// 0 <=> 4
// 1 <=> 3
// 2 <=> 2
function isPalindrome(str, start = 0, end = str.length - 1) {
  if (start >= end) {
    return true;
  } else {
    if (str[start] === str[end]) {
      return isPalindrome(str, start + 1, end - 1);
    }
    return false;
  }
}

const test1 = "test";
const test2 = "kayak";

console.log(`Word "${test1}" is palindrome ? ->`, isPalindrome(test1));
console.log(`Word "${test2}" is palindrome ? ->`, isPalindrome(test2));
