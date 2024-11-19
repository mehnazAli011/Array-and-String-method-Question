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
// Q 4.Divisible and Non-Divisible Sums Difference
// You are given positive integers n and m.

// Define two integers as follows:

// num1: The sum of all integers in the range [1, n] (both inclusive) that are not divisible by m.
// num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible by m.
// Return the integer num1 - num2.

// Example 1:

// Input: n = 10, m = 3
// Output: 19
// Explanation: In the given example:
// - Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
// - Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
// We return 37 - 18 = 19 as the answer.
// Example 2:

// Input: n = 5, m = 6
// Output: 15
// Explanation: In the given example:
// - Integers in the range [1, 5] that are not divisible by 6 are [1,2,3,4,5], num1 is the sum of those integers = 15.
// - Integers in the range [1, 5] that are divisible by 6 are [], num2 is the sum of those integers = 0.
// We return 15 - 0 = 15 as the answer.
// Example 3:

// Input: n = 5, m = 1
// Output: -15
// Explanation: In the given example:
// - Integers in the range [1, 5] that are not divisible by 1 are [], num1 is the sum of those integers = 0.
// - Integers in the range [1, 5] that are divisible by 1 are [1,2,3,4,5], num2 is the sum of those integers = 15.
// We return 0 - 15 = -15 as the answer.

function differenceOfSum(n, m) {
  let num1 = 0;
  let num2 = 0;
  for (let i = 1; i <= n; i++) {
    if (i % m !== 0) {
      num1 += i;
    } else if (i % m === 0) {
      num2 += i;
    }
  }
  return num1 - num2;
}
console.log(differenceOfSum(10, 3));
console.log(differenceOfSum(5, 6));
console.log(differenceOfSum(5, 1));
// Time complexity:-O(n)

//Better Approach
function differenceOfSum(n, m) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    i % m == 0 ? (result -= i) : (result += i);
  }
  return result;
}
console.log(differenceOfSum(10, 3));
console.log(differenceOfSum(5, 6));
console.log(differenceOfSum(5, 1));
// =======================================================================================
// Q 5.The two sneaky Numbers of Digitville
// In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.

// As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two numbers (in any order), so peace can return to Digitville.

// Example 1:

// Input: nums = [0,1,1,0]

// Output: [0,1]

// Explanation:

// The numbers 0 and 1 each appear twice in the array.

// Example 2:

// Input: nums = [0,3,2,1,3,2]

// Output: [2,3]

// Explanation:

// The numbers 2 and 3 each appear twice in the array.

// Example 3:

// Input: nums = [7,1,5,4,3,4,6,0,9,5,8,2]

// Output: [4,5]

// Explanation:

// The numbers 4 and 5 each appear twice in the array.

//Brute Approach
function getSneakyNumbers(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count === 2) {
      res.push(nums[i]);
    }
  }
  return res;
}
console.log(getSneakyNumbers([0, 1, 1, 0]));
console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2]));
console.log(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]));
//Time complexity:-O(n)

function getSneakyNumbers(nums) {
  return nums.filter((elm, i) => nums.indexOf(elm) !== i);
}
console.log(getSneakyNumbers([0, 1, 1, 0]));
console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2]));
console.log(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2]));
//Time complexity:-O(n)

// ========================================================================================
//Q 6. Add two integer.
function addTwoInteger(num1, num2) {
  return num1 + num2;
}
console.log(addTwoInteger(12, 5));
console.log(addTwoInteger(-10, 4));
// =====================================================================================
//Q 7 Sum Multiples
//Brute Approach
function sumOfMutiple(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfMutiple(7));
console.log(sumOfMutiple(10));
console.log(sumOfMutiple(9));
//Time complexity:O(n)
// ===================================================================================
// Q 8 Difference Between Element Sum and Digit Sum of An Array
// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.

// Example 1:

// Input: nums = [1,15,6,3]
// Output: 9
// Explanation:
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 0
// Explanation:
// The element sum of nums is 1 + 2 + 3 + 4 = 10.
// The digit sum of nums is 1 + 2 + 3 + 4 = 10.
// The absolute difference between the element sum and digit sum is |10 - 10| = 0.

// //Brute Approach
function differenceOfSum(nums) {
  let elmSum = 0;
  let digitSum = 0;
  let s = String(nums).split(",").join("");
  for (let i = 0; i < nums.length; i++) {
    elmSum += nums[i];
  }
  for (let j = 0; j < s.length; j++) {
    digitSum += Number(s[j]);
  }
  return Math.abs(elmSum - digitSum);
}
console.log(differenceOfSum([1, 15, 6, 3]));
console.log(differenceOfSum([1, 2, 3, 4]));
// Time complexity:-O(n**2)

//Optimal Approach
// function differenceOfSum(nums) {
//   let eleSum = 0;
//   let digSum = 0;

//   for (let ele of nums) {
//       eleSum += ele;
//       let temp = ele; // Create a temporary variable
//       while (temp > 0) {
//           digSum += temp % 10;
//           temp = Math.floor(temp / 10); // Modify temp, not ele
//       }
//   }

//   return eleSum - digSum;
// }
// console.log(differenceOfSum([1, 15, 6, 3]));
// console.log(differenceOfSum([1, 2, 3, 4]));

//pending
// function differenceOfSum(nums) {

// }
// console.log(differenceOfSum([1, 15, 6, 3]));
// console.log(differenceOfSum([1, 2, 3, 4]));
// =========================================================================================
// Q 9 Find if Digit Game Can Be Won
// You are given an array of positive integers nums.

// Alice and Bob are playing a game. In the game, Alice can choose either all single-digit numbers or all double-digit numbers from nums, and the rest of the numbers are given to Bob. Alice wins if the sum of her numbers is strictly greater than the sum of Bob's numbers.

// Return true if Alice can win this game, otherwise, return false.

// Example 1:

// Input: nums = [1,2,3,4,10]

// Output: false

// Explanation:

// Alice cannot win by choosing either single-digit or double-digit numbers.

// Example 2:

// Input: nums = [1,2,3,4,5,14]

// Output: true

// Explanation:

// Alice can win by choosing single-digit numbers which have a sum equal to 15.

// Example 3:

// Input: nums = [5,5,5,25]

// Output: true

// Explanation:

// Alice can win by choosing double-digit numbers which have a sum equal to 25.
//Brute Approach
function canAliceWin(nums) {
  let score1 = 0;
  let score2 = 0;
  for (let num of nums) {
    if (num < 10) {
      score1 += num;
    } else {
      score2 += num;
    }
  }
  return score1 !== score2 ? true : false;
}
console.log(canAliceWin([1, 2, 3, 4, 10]));
console.log(canAliceWin([1, 2, 3, 4, 5, 14]));
console.log(canAliceWin([5, 5, 5, 25]));
//Better Approach
function canAliceWin(nums) {
  let single = nums.filter((elm) => elm < 10).reduce((acc, curr) => acc + curr);
  let double = nums.reduce((acc, curr) => acc + curr) - single;
  return single !== double;
}
console.log(canAliceWin([1, 2, 3, 4, 10]));
console.log(canAliceWin([1, 2, 3, 4, 5, 14]));
console.log(canAliceWin([5, 5, 5, 25]));
// =======================================================================================
//Q 10 Sum of Absoluate Differences in sorted Array
// You are given an integer array nums sorted in non-decreasing order.

// Build and return an integer array result with the same length as nums such that result[i] is equal to the summation of absolute differences between nums[i] and all the other elements in the array.

// In other words, result[i] is equal to sum(|nums[i]-nums[j]|) where 0 <= j < nums.length and j != i (0-indexed).

// Example 1:

// Input: nums = [2,3,5]
// Output: [4,3,5]
// Explanation: Assuming the arrays are 0-indexed, then
// result[0] = |2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4,
// result[1] = |3-2| + |3-3| + |3-5| = 1 + 0 + 2 = 3,
// result[2] = |5-2| + |5-3| + |5-5| = 3 + 2 + 0 = 5.
// Example 2:

// Input: nums = [1,4,6,8,10]
// Output: [24,15,13,15,21]
//Brute Approach
function getSumAbsoluteDifferences(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = 0; j < nums.length; j++) {
      sum += Math.abs(nums[i] - nums[j]);
    }
    res.push(sum);
  }

  return res;
}
console.log(getSumAbsoluteDifferences([2, 3, 5]));
console.log(getSumAbsoluteDifferences([1, 4, 6, 8, 10]));
//Time complexity:O(n**2)
// =======================================================================================
//Q Check if The Number is Fascinating

// You are given an integer n that consists of exactly 3 digits.

// We call the number n fascinating if, after the following modification, the resulting number contains all the digits from 1 to 9 exactly once and does not contain any 0's:

// Concatenate n with the numbers 2 * n and 3 * n.
// Return true if n is fascinating, or false otherwise.

// Concatenating two numbers means joining them together. For example, the concatenation of 121 and 371 is 121371.

// Example 1:

// Input: n = 192
// Output: true
// Explanation: We concatenate the numbers n = 192 and 2 * n = 384 and 3 * n = 576. The resulting number is 192384576. This number contains all the digits from 1 to 9 exactly once.
// Example 2:

// Input: n = 100
// Output: false
// Explanation: We concatenate the numbers n = 100 and 2 * n = 200 and 3 * n = 300. The resulting number is 100200300. This number does not satisfy any of the conditions.

//Brute Approach
function isFascinatingNum(n) {
  let concat1 = n * 2;
  let concat2 = n * 3;
  let fullConcat = n.toString() + concat1.toString() + concat2.toString();

  if (fullConcat.length !== 9) {
    return false;
  }

  let concatArray = [];
  for (let i = 0; i < fullConcat.length; i++) {
    concatArray.push(fullConcat[i]);
  }

  let digitSet = new Set(concatArray);
  return digitSet.size === 9 && !digitSet.has("0");
}
console.log(isFascinatingNum(192));
console.log(isFascinatingNum(100));
console.log(isFascinatingNum(789));
//Time complexity:O(n)

function isFascinatingNum(n) {
  let seen = new Set();
  let str = `${n}${n * 2}${n * 3}`;
  if (str.length !== 9)
    for (let c of str) {
      if (c === "0" || seen.has(c)) return false;
      seen.add(c);
    }
  return seen.size === 9;
}
console.log(isFascinatingNum(192));
console.log(isFascinatingNum(100));
console.log(isFascinatingNum(789));

function isFascinatingNum(n) {
  let str = `${n}${n * 2}${n * 3}`;
  let validStr = "123456789";
  return Array.from(new Set(str)).sort().join("") === validStr;
}
console.log(isFascinatingNum(192));
console.log(isFascinatingNum(100));
console.log(isFascinatingNum(789));
// =======================================================================================
//  Q Is Object Empty
// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:

// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:

// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.

//Brute Approach
function isEmpty(obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }

  return Object.keys(obj).length === 0;
}
console.log(isEmpty({ x: 5, y: 42 }));
console.log(isEmpty({}));
console.log(isEmpty([null, false, 0]));

//Better Approach
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
console.log(isEmpty({ x: 5, y: 42 }));
console.log(isEmpty({}));
console.log(isEmpty([null, false, 0]));
// ====================================================================================
//Q Fizz Buzz

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

function fizzBuzz(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 3 === 0) {
      answer.push("Fizz");
    } else if (i % 5 === 0) {
      answer.push("Buzz");
    } else {
      answer.push(i.toString());
    }
  }
  return answer;
}
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
// =======================================================================================
//Q Add to Array-Form of Integer
// The array-form of an integer num is an array representing its digits in left to right order.

// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

// Example 1:

// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
// Example 2:

// Input: num = [2,7,4], k = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455
// Example 3:

// Input: num = [2,1,5], k = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021

function addToArrayForm(n, k) {
  n = BigInt(n.join(""));
  let r = n + BigInt(k);
  return r.toString().split("").map(Number);
}
console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(addToArrayForm([2, 7, 4], 181));
console.log(addToArrayForm([2, 1, 5], 806));
console.log(
  addToArrayForm(
    [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3],
    516
  )
);
//time complexity:O(n)
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

// Example 1:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
// Example 3:

// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.

function isUgglyNum(n) {
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else if (n % 3 === 0) {
      n = n / 3;
    } else if (n % 5 === 0) {
      n = n / 5;
    } else {
      break;
    }
  }
  return n == 1;
}
console.log(isUgglyNum(6));
console.log(isUgglyNum(1));
console.log(isUgglyNum(14));
//Time complexity:O(logn)

//      <--------------------------------------------------------------->

//Q Count odd Numbers in an Interval Range
// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].
// Example 2:

// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].

//brute froce Approach
function countOdds(low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
}
console.log(countOdds(3, 7));
console.log(countOdds(8, 10));
//time complexity:O(n)

//optimal Approach
function countOdds(low, high) {
  if (low % 2 === 0 && high % 2 === 0) {
    return (high - low) / 2;
  } else {
    return Math.floor((high - low) / 2) + 1;
  }
}
console.log(countOdds(3, 7));
console.log(countOdds(8, 10));
// time complexity:O(1)
