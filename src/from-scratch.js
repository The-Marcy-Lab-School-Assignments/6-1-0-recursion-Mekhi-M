// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr, i = 0, acc = 0) =>
  i === arr.length ? acc : sum(arr, i + 1, acc + arr[i]);

// Reverse string using recursive approach
const reverse = (str, i = str.length - 1, res = "") =>
  i < 0 ? res : reverse(str, i - 1, res + str[i]);

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let first = 0;
  let second = 1;
  let sum = 0;

  while (n > 1) {
    sum = first + second;
    first = second;
    second = sum;
    n--;
  }

  return sum;
};

// Recursive fibonacci
const fibRec = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibRec(n - 1) + fibRec(n - 2);
};

// Return the index of target in arr, or -1 if not found using recursion
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);
  if (target === arr[mid]) return mid;

  return target < arr[mid]
    ? binarySearch(arr, target, start, mid - 1)
    : binarySearch(arr, target, mid + 1, end);
};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
