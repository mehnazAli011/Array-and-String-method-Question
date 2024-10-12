//Q 1.
// Implement a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).

// Example 1:

// Input: nums = [-1,-2,-3,-4,3,2,1]
// Output: 1
// Explanation: The product of all values in the array is 144, and signFunc(144) = 1
// Example 2:

// Input: nums = [1,5,0,2,-3]
// Output: 0
// Explanation: The product of all values in the array is 0, and signFunc(0) = 0
// Example 3:

// Input: nums = [-1,1,-1,1,-1]
// Output: -1
// Explanation: The product of all values in the array is -1, and signFunc(-1) = -1

var arraySign = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0;
    } else if (nums[i] < 0) {
      count++;
    }
  }
  return count % 2 === 0 ? 1 : -1;
};
console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
console.log(arraySign([1, 5, 0, 2, -3]));
console.log(arraySign([-1, 1, -1, 1, -1]));

function arraySing(nums) {
  if (nums.includes(0)) return 0;
  product = nums.reduce((acc, curr) => {
    return (acc *= curr);
  }, 1);
  return product < 0 ? -1 : 1;
}

console.log(arraySing([-1, -2, -3, -4, 3, 2, 1]));
console.log(arraySing([1, 5, 0, 2, -3]));
console.log(arraySing([-1, 1, -1, 1, -1]));
//==========================================================================================

// // Q 2A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

// Given an integer n, return true if n is a perfect number, otherwise return false.

// Example 1:

// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.
// Example 2:

// Input: num = 7
// Output: false

var checkPerfectNumber = function (num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
};
console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));

var checkPerfectNumber = function (nums) {
  return [6, 28, 496, 8128, 33550336].includes(nums);
};
console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));
// ========================================================================================
// Q 3
// Given an array nums of integers, return how many of them contain an even number of digits.

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1
// Explanation:
// Only 1771 contains an even number of digits.
//Brute Approach
function findNumbers(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let digit = nums[i].toString().length;
    if (digit % 2 === 0) {
      count++;
    }
  }
  return count;
}
console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
//Time complexity:-O(n)

//Better Appraoch
function findNumbers(nums) {
  return nums
    .map((digit) => String(digit))
    .filter((num) => num.length % 2 === 0).length;
}
console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
// =========================================================================================