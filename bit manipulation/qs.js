//Basic Question
//Q 1. converte integer into binary form.

function inBinaryForm(x) {
  let res = "";
  while (x > 0) {
    if (x % 2 === 1) res += "1";
    else res += "0";
    x = Math.floor(x / 2);
  }
  return res.split("").reverse().join("");
}
console.log(inBinaryForm(12));
console.log(inBinaryForm(13));
console.log(inBinaryForm(6));
console.log(inBinaryForm(7));
console.log(inBinaryForm(11));

//Time complexity:O(log n) because it's always logrithmic base of 2N.

//               <--------------------------------------------------->
//Q 2 Binary form into integer form
//First Approach
function inDecimalForm(x) {
  let length = x.length;
  let num = 0;
  for (let i = x.length - 1; i >= 0; i--) {
    let value = 2 ** Math.abs(length - 1 - i);
    num += x[i] * value;
  }
  return num;
}
console.log(inDecimalForm("1100"));
console.log(inDecimalForm("1101"));

//second Approach
function inDecimalForm(x) {
  let length = x.length;
  let num = 0;
  let p2 = 1;
  for (let i = length - 1; i >= 0; i--) {
    if (x[i] === "1") num += p2;
    p2 = p2 * 2;
  }
  return num;
}
console.log(inDecimalForm("1100"));
console.log(inDecimalForm("1101"));
//Time complexity:O(length)

//Q 1.Binary Number with Alternating Bits

// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

// Example 1:

// Input: n = 5
// Output: true
// Explanation: The binary representation of 5 is: 101
// Example 2:

// Input: n = 7
// Output: false
// Explanation: The binary representation of 7 is: 111.
// Example 3:

// Input: n = 11
// Output: false
// Explanation: The binary representation of 11 is: 1011.

function hasAlternatingBits(n) {
  let res = "";
  while (n > 0) {
    if (n % 2 === 1) res += "1";
    else res += "0";
    n = Math.floor(n / 2);
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i] === res[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(hasAlternatingBits(5));
console.log(hasAlternatingBits(7));
console.log(hasAlternatingBits(11));
//time complexity:O(logn)+O(log n)=O(log n)
//         <-------------------------------------->
//Q 2 Number Complement
// The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

// For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
// Given an integer num, return its complement.

// Example 1:

// Input: num = 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
// Example 2:

// Input: num = 1
// Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

function findCompletement(num) {
  //convert into binary form
  let res = "";
  while (num > 0) {
    if (num % 2 === 1) res += "1";
    else res += "0";
    num = Math.floor(num / 2);
  }
  //flip the all 0's to 1 and 1's to 0
  let arr = res
    .split("")
    .reverse()
    .map((elm) => Math.abs(elm - "1"));
  console.log(arr);
  //convert into integer
  i = arr.length;
  let n = 0;
  let p = 1;
  while (i--) {
    if (arr[i] === 1) n += p;
    p = p * 2;
  }
  return n;
}
console.log(findCompletement(5));
console.log(findCompletement(1));
//time complexity:-O(log(num))
//         <-------------------------------------->
//Q Number of 1 bits
// Given a positive integer n. Your task is to return the count of set bits.

// Examples:

// Input: n = 6
// Output: 2
// Explanation: Binary representation is '110', so the count of the set bit is 2.
// Input: n = 8
// Output: 1
// Explanation: Binary representation is '1000', so the count of the set bit is 1.
// Input: n = 3
// Output: 2
//Brute force Approach
function countSetOfBit(n) {
  let count = 0;
  while (n > 0) {
    if (n % 2 === 1) count++;
    n = Math.floor(n / 2);
  }
  return count;
}
console.log(countSetOfBit(6));
console.log(countSetOfBit(8));
console.log(countSetOfBit(3));
console.log(countSetOfBit(128));
//time complexity:O(log n)

//Better Approach
function countSetOfBit(n) {
  let count = 0;
  while (n > 0) {
    n = n & (n - 1);
    count++;
  }
  return count;
}
console.log(countSetOfBit(6));
console.log(countSetOfBit(8));
console.log(countSetOfBit(3));
console.log(countSetOfBit(4));
//time complexity:O(1)
//         <-------------------------------------->
//Q A Number After a Double Reversal
// Reversing an integer means to reverse all its digits.

// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

// Example 1:

// Input: num = 526
// Output: true
// Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.
// Example 2:

// Input: num = 1800
// Output: false
// Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.
// Example 3:

// Input: num = 0
// Output: true
// Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.

//Brute Force Approach
function isSameAfterReversals(num) {
  let reversed1 = Number(num.toString().split("").reverse().join(""));
  let reversed2 = Number(reversed1.toString().split("").reverse().join(""));
  return reversed2 === num;
}
console.log(isSameAfterReversals(526));
console.log(isSameAfterReversals(1800));
console.log(isSameAfterReversals(0));
//time complexity:O(d) here d is repersent digits

//Better approach
function isSameAfterReversals(num) {
  return num % 10 !== 0 || num == 0;
}
console.log(isSameAfterReversals(526));
console.log(isSameAfterReversals(1800));
console.log(isSameAfterReversals(0));
//Time complexity:O(1)
//         <-------------------------------------->
//Single number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

//Brute force Approach
function singleNumber(nums) {
  let XOR = 0;
  for (let num of nums) {
    XOR = XOR ^ num;
  }
  return XOR;
}
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
//time complexity-O(n)

//         <-------------------------------------->
//Q power of Two
// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false
//Brute force Approach
function powerOfTwo(n) {
  let i = 0;
  while (i <= n) {
    if (2 ** i === n) {
      return true;
    }
    i++;
  }
  return false;
}
console.log(powerOfTwo(1));
console.log(powerOfTwo(16));
console.log(powerOfTwo(3));
//time complexity:O(n)

function powerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
console.log(powerOfTwo(1));
console.log(powerOfTwo(16));
console.log(powerOfTwo(3));
//time complexity:O(1)

// A power of 2 in binary from is set of 1 bit and all other bit is 0 .so i use n&(n-1)===0

//         <-------------------------------------->
//XOR Operation on array
// You are given an integer n and an integer start.

// Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.

// Return the bitwise XOR of all elements of nums.

// Example 1:

// Input: n = 5, start = 0
// Output: 8
// Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
// Where "^" corresponds to bitwise XOR operator.
// Example 2:

// Input: n = 4, start = 3
// Output: 8
// Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.

function xorOperation(n, start) {
  value = 0;
  let i = 0;
  while (i < n) {
    value ^= start + 2 * i;
    i++;
  }
  return value;
}
console.log(xorOperation(5, 0));
console.log(xorOperation(4, 3));
// time complexity:O(n)

//First letter to appear twice.

// Given a string s consisting of lowercase English letters, return the first letter to appear twice.
// A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
// s will contain at least one letter that appears twice.

// Example 1:

// Input: s = "abccbaacz"
// Output: "c"
// Explanation:
// The letter 'a' appears on the indexes 0, 5 and 6.
// The letter 'b' appears on the indexes 1 and 4.
// The letter 'c' appears on the indexes 2, 3 and 7.
// The letter 'z' appears on the index 8.
// The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.
// Example 2:

// Input: s = "abcdd"
// Output: "d"
// Explanation:
// The only letter that appears twice is 'd' so we return 'd'.

function repeatedChar(s) {
  let obj = {};
  for (let elm of s) {
    if (!obj[elm]) {
      obj[elm] = 1;
    } else return elm;
  }
}
console.log(repeatedChar("abccbaacz"));
console.log(repeatedChar("abcdd"));
//time complexity:O(n)

//         <-------------------------------------->
//Q Number of the even and odd bits
// You are given a positive integer n.

// Let even denote the number of even indices in the binary representation of n with value 1.

// Let odd denote the number of odd indices in the binary representation of n with value 1.

// Note that bits are indexed from right to left in the binary representation of a number.

// Return the array [even, odd].

// Example 1:

// Input: n = 50

// Output: [1,2]

// Explanation:

// The binary representation of 50 is 110010.

// It contains 1 on indices 1, 4, and 5.

// Example 2:

// Input: n = 2

// Output: [0,1]

// Explanation:

// The binary representation of 2 is 10.

// It contains 1 only on index 1.

//Brute force approach
function evenOddBit(n) {
  let even = 0;
  let odd = 0;
  let binary = "";
  //convert into binary from
  while (n > 0) {
    if (n % 2 === 1) binary += "1";
    else binary += "0";
    n = Math.floor(n / 2);
  }
  //find value 1 at even index
  for (let index in binary) {
    if (index % 2 === 0 && binary[index] === "1") {
      even++;
    } else if (index % 2 !== 0 && binary[index] === "1") {
      //find value 1 at odd index
      odd++;
    }
  }
  return [even, odd];
}
console.log(evenOddBit(50));
console.log(evenOddBit(2));
//time compleixty:O(log n)

function evenOddBit(n) {
  let even = 0;
  let odd = 0;
  let bit = n.toString(2).split("").reverse().map(Number); //convert into binary from
  for (let i = 0; i < bit.length; i++) {
    if (i % 2 == 0 && bit[i] === 1) {
      even++;
    } else if (i % 2 !== 0 && bit[i] == 1) {
      odd++;
    }
  }
  return [even, odd];
}
console.log(evenOddBit(50));
console.log(evenOddBit(2));
