// Write a recursive function that calculates the sum of all numbers in an array.
const arrSum = (arr, i = 0, sum = 0) => {
  if (i === arr.length) return sum;
  return arrSum(arr, i + 1, sum + arr[i]);
};

console.log(arrSum([1, 2, 4, 7, 10]));

// Write a recursive function that returns the reversed version of a string.
const reverseStr = (str) => {};

// Challenge: Write a recursive function to generate the Fibonacci sequence up to a given number.
const fib = () => {};
