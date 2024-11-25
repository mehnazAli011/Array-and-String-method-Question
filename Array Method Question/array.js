// // Array method question for practice

//                                        easy Question
// Q1.Given the array integer, write a function find the maximum element in the array.
const arr = [1, 2, 3, 4, 5, 6];

// =>1.Approch
function findTheMaxElmInArr(arr) {
  //use Math Object and speard operator(...)
  return Math.max(...arr);
}
console.log(findTheMaxElmInArr(arr));
// -------------------------------------------------------
// =>2.Apprcoh
function findTheMaxElmInArr(arr) {
  max = arr.reduce((priviouseValue, currentValue) => {
    //use ternary operator
    return priviouseValue <= currentValue ? currentValue : priviouseValue;
    // currentValue<priviouseValue
    //1<=1   =>1
    //1<=2   =>2
    //2<=3   =>3
    //3<=4   =>4
    //4<=5   =>5
    //5<=6   =>6
    //final result is 6
  }, arr[0]);
  return max;
}
console.log(findTheMaxElmInArr(arr));
//----------------------------------------------------------------
// //3.Approch
function findTheMaxElmInArr(arr) {
  let max = arr[0];
  arr.forEach((elm) => {
    if (elm > max) {
      max = elm;
    }
  });
  return max;
}
console.log(findTheMaxElmInArr(arr));
// // ===============================================================================

// Q2.Given the array integer, write a function find the all even element in the array.

// =>1 Apprcoh!
function findAllEvenElmInArr(arr) {
  return arr.filter((elm) => elm % 2 == 0);
}
console.log(findAllEvenElmInArr(arr));

// // -------------------------------------------------------
// // =>2 Approch

function findAllEvenElmInArr(arr) {
  return arr.reduce((privousValue, currentValue) => {
    if (currentValue % 2 == 0) {
      privousValue.push(currentValue);
    }
    return privousValue;
  }, []);
}
console.log(findAllEvenElmInArr(arr));
// ----------------------------------------------------
//=>3 Approch
function findAllEvenElmInArr(arr) {
  let evenNums = [];
  arr.forEach((element) => {
    if (element % 2 == 0) {
      evenNums.push(element);
    }
  });
  return evenNums;
}
console.log(findAllEvenElmInArr(arr));
// // ================================================================================

// Q2.Creates a new array with  the result multplie for every element  in array.

// =>1 Apprcoh!
function modifiyTheArr(arr) {
  return arr.map((elm) => elm * 2);
}
console.log(modifiyTheArr(arr));

//------------------------------------------------

//2 Apprcoh
function modifiyTheArr(arr) {
  let mArr = [];
  arr.forEach((element) => {
    mArr.push(element * 2);
  });
  return mArr;
}
console.log(modifiyTheArr(arr));
// =================================================================================

// Q4. find the given arr  sum.
//1=>
function findSumOfArr(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(findSumOfArr(arr));
// -----------------------------
//=>2
function findSumOfArr(arr) {
  let sum = 0;
  arr.forEach((elm) => {
    sum += elm;
  });
  return sum;
}
console.log(findSumOfArr(arr));
// ================================================================================

// Q5 Find the givene array first even number.

// =>1

function firstEvenNumber(arr) {
  return arr.find((elm) => elm % 2 == 0);
}
console.log(firstEvenNumber(arr));
// -----------------------------------------------
// =>2
function firstEvenNumber(arr) {
  return arr.at(arr.findIndex((elm) => elm % 2 == 0));
}
console.log(firstEvenNumber(arr));
// -------------------------------------------------
// =>3
function firstEvenNumber(arr) {
  return arr.filter((elm) => elm % 2 == 0).at(0);
}
console.log(firstEvenNumber(arr));
// // =================================================================================
// Q6.create a function ,reverse the given array.

// 1=>Approch
// function reverseTheArr(arr) {
//   return arr.map((_, index) => arr.at(-index - 1));
// }
// console.log(reverseTheArr(arr));
// // ------------------------------------------------------
// =>2 Aprroch
// function reverseTheArr(arr) {
//   return arr.reduce((acc, curr) => {
//     acc.unshift(curr);
//     return acc;
//   }, []);
// }
// console.log(reverseTheArr(arr));
// // =================================================================================

// Q 7.write a function flat the given array.
// let number = [[1, 2, [3, 4, [5]]]];
// function flatternArr(number) {
//   return number.flat(Infinity);
// }
// console.log(flatternArr(number));

// // ==============================================================================

// Q.8  write a function remove duplicate form the given array

// //=>1.Approch
// let nums = [1, 3, 4, 6, 3, 1];
// function removeDuplicate(nums) {
//   return [...new Set(nums)];
// }
// console.log(removeDuplicate(nums));

// // ---------------------------------

// // 2=>Approch
// function removeDuplicate(nums) {
//   return nums.filter((elm, index) => nums.indexOf(elm) == index);
//   //nums.indexOf(elm) ,index
//   // 0                 0
//   // 1                 1
//   // 2                 2
//   // 3                 3
//   // 1                 4
//   // 0                 5
// }
// console.log(removeDuplicate(nums));
// // ==============================================================================

// let num1 = [1, 2, 3, 4];
// let num2 = [4, 5, 6, 2];
// //Q9 write a function and merge the given to array.

// function mergeArrays(num1, num2) {
//   return num1.concat(num2);
// }
// console.log(mergeArrays(num1, num2));
// // //------------------------------------------------

// function mergeArrays(num1, num2) {
//   return [...num1, ...num2];
// }
// console.log(mergeArrays(num1, num2));

// // ----------------------------------------
// Q10.
// const people = [
//   { name: "John", age: 30 },
//   { name: "Jane", age: 25 },
//   { name: "Alice", age: 35 },
// ];

// console.log(people.sort((a, b) => a.age - b.age));
// // =================================================================================

// Q11.write a function and check x present in arr or not.

// // =>1 Apprcoh
// function xIsFindArr(arr, x) {
//   return arr.includes(x);
// }
// console.log(xIsFindArr(arr, 3));
// // ----------------------------------------
// //=>2 Approch
// function xIsFindArr(arr, x) {
//   return arr.some((elm) => elm == x);
// }
// console.log(xIsFindArr(arr, 3));

// // ==============================================================================

// // 12 Write a function and check if all element greater then the x.

// function check(arr, x) {
//   return arr.every((elm) => elm > x); //false because every arr element not implement this conditions
// }
// console.log(check(arr, 6));

// //  Write a function and check if all element less then the x.

// function check(arr, x) {
//   return arr.every((elm) => elm < x); //false , because only one element not impletement this condition
// }
// console.log(check(arr, 6));

// // =============================================================================

// Q 13 write a function and check at least one element in arr less then the x.

// function check(arr, x) {
//   return arr.some((elm) => elm > x); //true because only one element impelement this condtion 6>5.
// }
// console.log(check(arr, 5));

// // =================================================================================

// Q 14 write a function and return only odd element with square.

// function oddElmSquare(arr) {
//   return arr.filter((elm) => elm % 2 !== 0).map((elm) => elm ** 2);
// }
// console.log(oddElmSquare(arr));

// // =========================================================================

// Q 15 write a function and return common element in both num1,num2.
// //=>1 Approch
// function intersectionElm(num1, num2) {
//   return num1.filter((elm) => num2.includes(elm));
// }
// console.log(intersectionElm(num1, num2));

// // --------------------------------------------
// // =>2
// function intersectionElm(num1, num2) {
//   return Array.from(new Set(num1).intersection(new Set(num2)));
// }
// console.log(intersectionElm(num1, num2));

// //=================================================================================

// //                               Intermediate

// // Q1.find the messing number in the given array

// // =>
// function findTheMissingElm(nums) {
//   n = nums.length;
//   for (let i = 1; i <= n; i++) {
//     if (!nums.includes(i)) {
//       return i;
//     }
//   }
// }
// console.log(findTheMissingElm([1, 2, 4, 5]));
// // ===============================================================================

// // Q 2. write a funtion create an array to object.

// function convertArrayToObject(array) {
//   return array.reduce((obj, item) => {
//     if (item.id !== undefined && item.value !== undefined) {
//       obj[item.id] = item.value;
//     }
//     return obj;
//   }, {});
// }
// console.log(
//   convertArrayToObject([
//     { id: 1, value: "apple" },
//     { id: 2, value: "banana" },
//     { id: 3, value: "cherry" },
//   ])
// );
// // ==========================================================================

// // Q 3 Write a function count each element occurrnences in the array.
// // =>1
// function count_occur(nums) {
//   let obj = {};

//   for (let elm of nums) {
//     if (!obj[elm]) {
//       obj[elm] = 0;
//     }

//     obj[elm]++;
//   }
//   // 1:2
//   // 2:1
//   // 3:2
//   // 4:2
//   // 5:1
//   return obj;
// }
// console.log(count_occur([1, 1, 2, 3, 4, 5, 3, 4]));
// // -----------------------------------------------
// function count_occur(nums) {
//   return nums.reduce((acc, curr) => {
//     acc[curr] = (acc[curr]++ || 0) + 1;
//     return acc;
//     // 1:2
//     // 2:1
//     // 3:2
//     // 4:2
//     // 5:1
//   }, {});
// }
// console.log(count_occur([1, 1, 2, 3, 4, 5, 3, 4]));

// // ===============================================================================

// // Q4 Write  a function and return the kth largest element in the array.

// function kthLargestElm(nums, k) {
//   num1.sort((a, b) => a - b);
//   return nums.at(k - 1);
// }
// console.log(kthLargestElm([12, 6, 8, 34, 2], 3));

// // ================================================================================

// // Q 5 Write  a function rotate an array k time, where the k is non-negitve.

// function rotateArray(nums, k) {
//   return nums.slice(-k).concat(arr.slice(0, nums.length - k));
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 2));
// console.log(rotateArray([1, 2, 3, 4, 5], 3));
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7, 8], 4));

// // ================================================================================

// // Q 5 write a function find the maximum product of three elements.

// function maxProductOfThreeElm(nums) {
//   let sorted = nums.sort((a, b) => b - a);
//   product1 = sorted.at(0) * sorted.at(1) * sorted.at(2);
//   // console.log(product1);
//   product2 = sorted.at(0) * sorted.at(-2) * sorted.at(-1);
//   // console.log(product2);

//   return Math.max(product1, product2);
// }
// console.log(maxProductOfThreeElm([1, 10, 100, 1000]));
// console.log(maxProductOfThreeElm([-10, -10, 5, 2]));

// // ===============================================================
// // Q 6
// let people = [
//   { name: "Alice", age: 12 },
//   { name: "john", age: 11 },
//   { name: "jehan", age: 10 },
//   { name: "amit", age: 12 },
// ];

// let groupByAge = {};

// for (let elm of people) {
//   //check if age group  already exixts in the groupByAge
//   if (!groupByAge[elm.age]) {
//     groupByAge[elm.age] = []; //if not,then create an empty array
//   }
//   groupByAge[elm.age].push(elm);
// }
// console.log(groupByAge);

// // ------------------------------------------------------------
// // with method
// let result = Object.groupBy(people, ({ age }) => age);
// console.log(result);
// // ========================================================

// //Q 7
// // Problem Statement
// // You have a list of integers where each integer represents the number of occurrences of that integer in the list. For example, the integer 3 means that the number 3 appears 3 times in the list.

// // Write a function generateList(arr) that takes this list of integers as input and returns a new list where each integer appears in the list according to its value.

// // For example:
// // generateList([3, 1, 2]);
// // // Expected output: [3, 3, 3, 2, 2, 1]

// // function generateList(arr) {
// //   let result = [];
// //   for (let elm of arr) {
// //     let s = String(elm);

// //     result.push(s.repeat(Number(s)));
// //   }
// //   return result.join(" ").replaceAll(" ","").split("").map(elm=>Number(elm))
// // }
// // console.log(generateList([3, 1, 2]));

// // ============================================================================
// // Question: Given an array of integers, write a JavaScript function to find the "k" most frequent elements.

// // Example:

// // const nums = [1, 1, 1, 2, 2, 3];
// // const k = 2;
// // console.log(topKFrequent(nums, k)); // Output: [1, 2]
// //=================================================================================
// // Q find the original array of prefix XOR
// // You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:

// // pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
// // Note that ^ denotes the bitwise-xor operation.

// // It can be proven that the answer is unique.

// // Example 1:

// // Input: pref = [5,2,0,3,1]
// // Output: [5,7,2,3,2]
// // Explanation: From the array [5,7,2,3,2] we have the following:
// // - pref[0] = 5.
// // - pref[1] = 5 ^ 7 = 2.
// // - pref[2] = 5 ^ 7 ^ 2 = 0.
// // - pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3.
// // - pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.
// // Example 2:

// // Input: pref = [13]
// // Output: [13]
// // Explanation: We have pref[0] = arr[0] = 13.

// var findArray = function (pref) {
//   return pref.map((val, idx) => {
//     if (idx === 0) {
//       return val;
//     } else {
//       return val ^ pref[idx - 1];
//     }
//   });
// };
// console.log(findArray([5, 2, 0, 3, 1]));
// console.log(findArray([13]));
// // =====================================================================================
// // Q decode XORed Array
// // There is a hidden integer array arr that consists of n non-negative integers.

// // It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].

// // You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].

// // Return the original array arr. It can be proved that the answer exists and is unique.

// // Example 1:

// // Input: encoded = [1,2,3], first = 1
// // Output: [1,0,2,1]
// // Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]
// // Example 2:

// // Input: encoded = [6,2,7,3], first = 4
// // Output: [4,2,0,7,4]

// function deCode(encoded, first) {
//   let res = [first];
//   encoded.forEach((val, i) => res.push(res[i] ^ val));
//   return res;
// }
// console.log(deCode([1, 2, 3], 1)); //[1,0,2,1]
// console.log(deCode([6, 2, 7, 3], 4));

// // ===============================================================================
// Q Sort character by frequncy
//   Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

function frequencySort(s) {
  let map = new Map();
  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  let arr = [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .map((c) => c[0].repeat(c[1]))
    .join("");
  return arr;
}
console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));
// // Time complexity:-O(n)

// ===================================================================================
// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]

//Better Approach
function smallerNumbersThanCurrent(nums) {
  let sorted = [...nums].sort((a, b) => a - b);
  return nums.map((elm) => sorted.indexOf(elm));
}
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));
//Time complexity:-O(n**2)

// ======================================================================================
//Q
function addToArrayForm(arr, k) {
  let string = (Number(arr.join("")) + k).toString();
  return string.split("").map((elm) => Number(elm));
}
console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(addToArrayForm([2, 7, 4], 181));
console.log(addToArrayForm([2, 1, 5], 806));
// ==================================================================================
//  Singe of the product of an Array
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
// =========================================================================================
// / Q 9 Find if Digit Game Can Be Won
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
  let single = nums.filter((elm) => elm < 10).reduce((acc, curr) => acc + curr);
  let double = nums.reduce((acc, curr) => acc + curr) - single;
  return single !== double;
}
console.log(canAliceWin([1, 2, 3, 4, 10]));
console.log(canAliceWin([1, 2, 3, 4, 5, 14]));
console.log(canAliceWin([5, 5, 5, 25]));
// ======================================================================================
// //                                 DSA Questions

// // Q1.
// // Concatenation of Array
// // Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// // Specifically, ans is the concatenation of two nums arrays.

// // Return the array ans.

// // Example 1:

// // Input: nums = [1,2,1]
// // Output: [1,2,1,1,2,1]
// // Explanation: The array ans is formed as follows:
// // - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// // - ans = [1,2,1,1,2,1]
// // Example 2:

// // Input: nums = [1,3,2,1]
// // Output: [1,3,2,1,1,3,2,1]
// // Explanation: The array ans is formed as follows:
// // - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// // - ans = [1,3,2,1,1,3,2,1]

// // Brute  Approch
// function getConcatenations(nums) {
//   let result = [];
//   result.length = nums.length * 2;
//   for (let i = 0; i < nums.length; i++) {
//     result[i] = nums[i];
//     result[i + nums.length] = nums[i];
//   }
//   return result;
// }
// console.log(getConcatenations([1, 2, 1]));
// console.log(getConcatenations([1, 3, 2, 1]));

// //Better  Approch
// function getConcatenations(nums) {
//   return nums.concat(nums);
// }
// console.log(getConcatenations([1, 2, 1]));
// console.log(getConcatenations([1, 3, 2, 1]))

// // Optimal Approach
// function getConcatenations(nums) {
//   let result = [];
//   n = nums.length;
//   for (let j = 0; j < 2; j++) {
//     for (let i = 0; i < nums.length; i++) {
//       result.push(nums[i]);
//     }
//   }
//   return result;
// }
// console.log(getConcatenations([1, 2, 1]));
// console.log(getConcatenations([1, 3, 2, 1]));

// // ==============================================================================

// // Q2. Squares of a sorted Array
// // Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// // Example 1:

// // Input: nums = [-4,-1,0,3,10]
// // Output: [0,1,9,16,100]
// // Explanation: After squaring, the array becomes [16,1,0,9,100].
// // After sorting, it becomes [0,1,9,16,100].
// // Example 2:

// // Input: nums = [-7,-3,2,3,11]
// // Output: [4,9,9,49,121]

// //better Approach
// function squareOfArray(nums) {
//   return nums.map((elm) => elm ** 2).sort((a, b) => a - b);
// }
// console.log(squareOfArray([-4, -1, 0, 3, 10]));
// console.log(squareOfArray([-7, -3, 2, 3, 11]));

// // optimal Apprcoh
// function squareOfArray(nums) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     result.push(nums[i] ** 2);
//   }
//   return result.sort((a, b) => a - b);
// }
// console.log(squareOfArray([-4, -1, 0, 3, 10]));
// console.log(squareOfArray([-7, -3, 2, 3, 11]));

// // other Approch
// function squareOfArray(nums) {
// result = nums.reduce((acc, curr) => {
//     acc.push(curr ** 2);
//     return acc;
//   }, []);
//   return result.sort((a,b)=>a-b)
// }
// console.log(squareOfArray([-4, -1, 0, 3, 10]));
// console.log(squareOfArray([-7, -3, 2, 3, 11]));
// // =================================================================================
// // Q 3.Missig Number
// // Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// // Example 1:

// // Input: nums = [3,0,1]
// // Output: 2
// // Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// // Example 2:

// // Input: nums = [0,1]
// // Output: 2
// // Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// // Example 3:

// // Input: nums = [9,6,4,2,3,5,7,0,1]
// // Output: 8
// // Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

//Brute Approach
// function findMissingElm(nums) {
//   let result = [];
//   n = nums.length;
//   for (let i = 1; i <= n; i++) {
//     flag = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[j] === i) {
//         flag = 1;
//       }
//     }
//     if (flag === 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(findMissingElm([3, 0, 1]));
// console.log(findMissingElm([0, 1]));
// console.log(findMissingElm([9, 6, 4, 2, 3, 5, 7, 0, 1]));

//Better Appoach
// function findMissingElm(nums) {
//   n = nums.length;
//   for (let i = 0; i <= n; i++) {
//     if (!nums.includes(i)) {
//       return i;
//     }
//   }
// }
// console.log(findMissingElm([3, 0, 1]));
// console.log(findMissingElm([0, 1]));
// console.log(findMissingElm([9, 6, 4, 2, 3, 5, 7, 0, 1]));

//Optimal Approach
// function findMissingElm(nums) {
//   n = nums.length;
//   let s1 = (n * (n + 1)) / 2;
//   let s2 = 0;
//   for (let i = 0; i < nums.length; i++) {
//     s2 += nums[i];
//   }
//   return [s1 - s2];
// }
// console.log(findMissingElm([3, 0, 1]));
// console.log(findMissingElm([0, 1]));
// console.log(findMissingElm([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// // =============================================================================
// // Q4 To Lower Case
// // Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// // Example 1:

// // Input: s = "Hello"
// // Output: "hello"
// // Example 2:

// // Input: s = "here"
// // Output: "here"
// // Example 3:

// // Input: s = "LOVELY"
// // Output: "lovely"
// //Brute Apprcoh
// function toLowercase(s) {
//   let result = "";
//   for (let char of s) {
//     if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
//       result += char.toLowerCase();
//     } else {
//       result += char;
//     }
//   }
//   return result;
// }
// console.log(toLowercase("Hello"));
// console.log(toLowercase("here"));
// console.log(toLowercase("LOVELY"));

// //Better Aprroach
// function toLowercase(s) {
//   return s.toLowerCase();
// }
// console.log(toLowercase("Hello"));
// console.log(toLowercase("here"));
// console.log(toLowercase("LOVELY"));

// // Q 5
// //Sqrt(x)

// // Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// // You must not use any built-in exponent function or operator.

// // For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// // Example 1:

// // Input: x = 4
// // Output: 2
// // Explanation: The square root of 4 is 2, so we return 2.
// // Example 2:

// // Input: x = 8
// // Output: 2
// // // Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

// function mySqrt(x) {
//   return Math.floor(Math.sqrt(x));
// }
// console.log(mySqrt(4));
// console.log(mySqrt(8));
// // ===============================================================================
// // Q 6
// // //Two sum
// // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// // You may assume that each input would have exactly one solution, and you may not use the same element twice.

// // You can return the answer in any order.

// // Example 1:

// // Input: nums = [2,7,11,15], target = 9
// // Output: [0,1]
// // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// // Example 2:

// // Input: nums = [3,2,4], target = 6
// // Output: [1,2]
// // Example 3:

// // Input: nums = [3,3], target = 6
// // Output: [0,1]

// // Brute Approah
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [-1,-1]
// }
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// //better  Approah
// function twoSum(nums, target) {
//   const map = new Map();
//   for (let index in nums) {
//     let pairTarget = target - nums[index];
//     if (map.has(pairTarget)) return [index, map.get(pairTarget)];
//     map.set(nums[index], index);
//   }
// }
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
// console.log(twoSum([1, 3], 6));

// // optimal Approah
function twoSum(nums, target) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) left++;
    else right--;
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
// // =================================================================================
// // Q7.Contains Duplicate
// // Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// // Example 1:

// // Input: nums = [1,2,3,1]
// // Output: true
// // Example 2:

// // Input: nums = [1,2,3,4]
// // Output: false
// // Example 3:

// // Input: nums = [1,1,1,3,3,4,3,2,4,2]
// // Output: true

// // brute approach
// // function containsDuplicate(nums) {
// //   const set = new Set(nums);
// //   return set.size !== nums.length;
// // }
// // console.log(containsDuplicate([1, 2, 3, 1]));
// // console.log(containsDuplicate([1, 2, 3, 4]));
// // console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// // better Approach
// // function containsDuplicate(nums) {
// //   const map = new Map();
// //   for (const n of nums) {
// //     if (map.has(n)) return true;
// //     map.set(n, true);
// //   }
// //   return false;
// // }
// // console.log(containsDuplicate([1, 2, 3, 1]));
// // console.log(containsDuplicate([1, 2, 3, 4]));
// // console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// // //optimal Approach
// // function containsDuplicate(nums) {
// //   nums.sort((a, b) => a - b);
// //   for (let i = 0; i < nums.length - 1; i++) {
// //     if (nums[i] == nums[i + 1]) {
// //       return true;
// //     }
// //   }
// //   return false;
// // }
// // console.log(containsDuplicate([1, 2, 3, 1]));
// // console.log(containsDuplicate([1, 2, 3, 4]));
// // console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// // ================================================================================
// // //Q 8.Valid Angaram
// // // Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// // // An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// // // Example 1:

// // // Input: s = "anagram", t = "nagaram"
// // // Output: true
// // // Example 2:

// // // Input: s = "rat", t = "car"
// // // Output: false
// // //1 Aprroach
// function isAnagram(s, t) {
//   return s.split("").sort().join("") === t.split("").sort().join("");
// }
// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));

// //2nd Approach
// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;
//   const map = new Map();
//   for (let c of s) {
//     if (map.has(c)) map.set(c, map.get(c) + 1);
//     else map.set(c, 1);
//   }

//   for (const c of t) {
//     if (!map.has(c)) return false;
//     else map.set(c, map.get(c) - 1);
//     if (map.get(c) == 0) map.delete(c);
//   }
//   if (map.size > 0) return false;
//   return true;
// }
// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));
// //

// optimal Approach
// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;

//   let s1 = s.split("").sort();
//   let t1 = t.split("").sort();
//   for (let i = 0; i < s1.length; i++) {
//     if (s1[i] !== t1[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));

// =================================================================================
// //Q 9 length of the last word
// // Given a string s consisting of words and spaces, return the length of the last word in the string.

// // A word is a maximal
// // substring
// //  consisting of non-space characters only.

// // Example 1:

// // Input: s = "Hello World"
// // Output: 5
// // Explanation: The last word is "World" with length 5.
// // Example 2:

// // Input: s = "   fly me   to   the moon  "
// // Output: 4
// // Explanation: The last word is "moon" with length 4.
// // Example 3:

// // Input: s = "luffy is still joyboy"
// // Output: 6
// // Explanation: The last word is "joyboy" with length 6.

// brute Approch

// function lengthOfLastWord(s) {
//   return s.trimEnd().split(" ").at(-1).length;
// }
// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// console.log(lengthOfLastWord("luffy is still joyboy"));

// better Approach
// function lengthOfLastWord(s) {
//   let length = 0;
//   let maxLength = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== " ") {
//       length++;
//       maxLength = length;
//     } else {
//       length = 0;
//     }
//   }
//   return maxLength;
// }
// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// console.log(lengthOfLastWord("luffy is still joyboy"));

// optimal Approach
// function lengthOfLastWord(s) {
//   let result = [];
//   let array = s.split(" ");
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== "") {
//       result.push(array[i]);
//     }
//   }
//   return result[result.length - 1].length;
// }
// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// console.log(lengthOfLastWord("luffy is still joyboy"));
// =================================================================================

// // Q 10 plus one
// // You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// // Increment the large integer by one and return the resulting array of digits.

// // Example 1:

// // Input: digits = [1,2,3]
// // Output: [1,2,4]
// // Explanation: The array represents the integer 123.
// // Incrementing by one gives 123 + 1 = 124.
// // Thus, the result should be [1,2,4].
// // Example 2:

// // Input: digits = [4,3,2,1]
// // Output: [4,3,2,2]
// // Explanation: The array represents the integer 4321.
// // Incrementing by one gives 4321 + 1 = 4322.
// // Thus, the result should be [4,3,2,2].
// // Example 3:

// // Input: digits = [9]
// // Output: [1,0]
// // Explanation: The array represents the integer 9.
// // Incrementing by one gives 9 + 1 = 10.
// // Thus, the result should be [1,0].
// function plusOne(digits) {
//   return String(Number(digits.join("")) + 1).split("");
// }
// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 2]));
// console.log(plusOne([9]));

// Optimal Approach
// function plusOne(digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] < 9) {
//       digits[i]++;
//       return digits;
//     }
//     digits[i] = 0;
//   }
//   // if all the digits are 9 we need add an  extra digit at beginning
//   return [1, ...digits];
// }
// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4, 3, 2, 2]));
// console.log(plusOne([9]));

// // =================================================================================
// //Q 11.
// //Remove Element
// // Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// // Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// // Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// // Return k.
// // Custom Judge:

// // The judge will test your solution with the following code:

// // int[] nums = [...]; // Input array
// // int val = ...; // Value to remove
// // int[] expectedNums = [...]; // The expected answer with correct length.
// //                             // It is sorted with no values equaling val.

// // int k = removeElement(nums, val); // Calls your implementation

// // assert k == expectedNums.length;
// // sort(nums, 0, k); // Sort the first k elements of nums
// // for (int i = 0; i < actualLength; i++) {
// //     assert nums[i] == expectedNums[i];
// // }
// // If all assertions pass, then your solution will be accepted.

// // Example 1:

// // Input: nums = [3,2,2,3], val = 3
// // Output: 2, nums = [2,2,_,_]
// // Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// // It does not matter what you leave beyond the returned k (hence they are underscores).
// // Example 2:

// // Input: nums = [0,1,2,2,3,0,4,2], val = 2
// // Output: 5, nums = [0,1,4,0,3,_,_,_]
// // Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// // Note that the five elements can be returned in any order.
// // It does not matter what you leave beyond the returned k (hence they are underscores)

// optimal Approach
// function removeDup(nums, val) {
//   let current = 0;
//   for (let i = 0; i < nums.length; i++) {
//     // if check is not equal
//     if (nums[i] !== val) {
//       // then update the array
//       nums[current] = nums[i];
//       // updateed Array = [3,3]
//       // updateed Array = [0,1,3,0,4]
//       current++;
//     }
//   }
//   return current;
// }
// console.log(removeDup([3, 2, 2, 3], 3));
// console.log(removeDup([0, 1, 2, 2, 3, 0, 4, 2], 2));
// // =================================================================================
// // Q 12
// // Find the Index of the First Occurrence in a String
// // Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// // Example 1:

// // Input: haystack = "sadbutsad", needle = "sad"
// // Output: 0
// // Explanation: "sad" occurs at index 0 and 6.
// // The first occurrence is at index 0, so we return 0.
// // Example 2:

// // Input: haystack = "leetcode", needle = "leeto"
// // Output: -1
// // Explanation: "leeto" did not occur in "leetcode", so we return -1.

// optimal Approach
// function findTheIndex(haystack, needle) {
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === needle[0]) {
//       if (needle === haystack.substr(i, needle.length)) return i;
//     }
//   }
//   return -1;
// }
// console.log(findTheIndex("sadbutsad", "sad"));
// console.log(findTheIndex("leetcode", "leeto"));

// // ===============================================================================

// //Q 13 Rotate the Array K time
// // Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// // Example 1:

// // Input: nums = [1,2,3,4,5,6,7], k = 3
// // Output: [5,6,7,1,2,3,4]
// // Explanation:
// // rotate 1 steps to the right: [7,1,2,3,4,5,6]
// // rotate 2 steps to the right: [6,7,1,2,3,4,5]
// // rotate 3 steps to the right: [5,6,7,1,2,3,4]
// // Example 2:

// // Input: nums = [-1,-100,3,99], k = 2
// // Output: [3,99,-1,-100]
// // Explanation:
// // rotate 1 steps to the right: [99,-1,-100,3]
// // rotate 2 steps to the right: [3,99,-1,-100]

// function rotateArr(nums, k) {
//   return nums.slice(-k).concat(nums.slice(0, nums.length - k));
// }
// console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotateArr([-1, -100, 3, 99], 2));

// // ================================================================================
// // Q 14Palindorm Number
// // Given an integer x, return true if x is a
// // palindrome
// // , and false otherwise.

// // Example 1:

// // Input: x = 121
// // Output: true
// // Explanation: 121 reads as 121 from left to right and from right to left.
// // Example 2:

// // Input: x = -121
// // Output: false
// // Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// // Example 3:

// // Input: x = 10
// // Output: false
// // Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// function check(x) {
//   let y = x.toString();
//   return y === y.split("").reverse().join("");
// }
// console.log(check(121));
// console.log(check(-121));
// console.log(check(10));

// // Q 15 Reverse String
// // Write a function that reverses a string. The input string is given as an array of characters s.

// // You must do this by modifying the input array in-place with O(1) extra memory.

// // Example 1:

// // Input: s = ["h","e","l","l","o"]
// // Output: ["o","l","l","e","h"]
// // Example 2:

// // Input: s = ["H","a","n","n","a","h"]
// // Output: ["h","a","n","n","a","H"]

// better Approach
// function reverseString(s) {
//   return s.reverse();
// }
// console.log(reverseString(["h", "e", "l", "l", "o"]));
// console.log(reverseString(["H", "a", "n", "n", "a", "h"]));

// Optimal Approach
// function reverseString(s) {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     temp = s[right];
//     s[right] = s[left];
//     s[left] = temp;
//     left++;
//     right--;
//   }
//   return s;
// }
// console.log(reverseString(["h", "e", "l", "l", "o"]));
// console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
// ======================================================================================
// // // Q 16
// // Find All Disapper number in Array
// // Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// // Example 1:

// // Input: nums = [4,3,2,7,8,2,3,1]
// // Output: [5,6]
// // Example 2:

// // Input: nums = [1,1]
// // Output: [2]

// better approach
// function disappearedElm(nums) {
//   let result = [];
//   const map = new Set(nums);
//   for (let i = 1; i <= nums.length; i++) {
//     if (!map.has(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(disappearedElm([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(disappearedElm([1, 1]));

// optimal approach
// function disappearedElm(nums) {
//   let result = [];
//   for (let i = 1; i <= nums.length; i++) {
//     if (!nums.includes(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(disappearedElm([4, 3, 2, 7, 8, 2, 3, 1]));
// console.log(disappearedElm([1, 1]));
// =================================================================================
// Q 17. Find the largest Element in array.

// brute-better-optimal
// //Brute Approach
// function findLargestElm(arr) {
//     arr.sort((a,b)=>a-b);
//     return arr[arr.length-1]
// }
// console.log(findLargestElm([6, 2, 3, 4, 5]));
// console.log(findLargestElm([5, 5, 5]));

// Better Approach
// function findLargestElm(arr) {
//     return Math.max(...arr)
// }
// console.log(findLargestElm([6, 2, 3, 4, 5]));
// console.log(findLargestElm([5, 5, 5]));

// Optimal Approach
// function findLargestElm(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findLargestElm([6, 2, 3, 4, 5]));
// console.log(findLargestElm([5, 5, 5]));

// ===============================================================================

// Q18 Find the second largest element in the array.

// Brute Approach
// function findTheSecondLargest(arr) {
//   if (arr.length < 2) {
//     return null;
//   }
//   let temp = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//       }
//     }
//   }
//   largest = arr[arr.length - 1];
//   for (let j = arr.length - 2; j >= 0; j--) {
//     if (arr[j] !== largest) {
//       return arr[j];
//     }
//   }
// }
// console.log(findTheSecondLargest([1, 7, 7, 8, 4, 2]));
// console.log(findTheSecondLargest([1, 7, 7, 7, 7]));

// //Better Approach
// function findTheSecondLargest(arr) {
//   let uniqueArr = [...new Set(arr)].sort((a, b) => a - b);
//   if (uniqueArr.length < 2) {
//     return null;
//   }
//   return uniqueArr[uniqueArr.length - 2];
// }
// console.log(findTheSecondLargest([1, 7, 7, 8, 4, 2]));
// console.log(findTheSecondLargest([1, 7, 7, 7, 7]));

// //Optimal  Approach
// function findTheSecondLargest(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   let secondLargest = arr[0];
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > secondLargest && arr[j] !== max) {
//       secondLargest = arr[j];
//     }
//   }
//   return secondLargest;
// }
// console.log(findTheSecondLargest([1, 7, 7, 8, 4, 2]));
// console.log(findTheSecondLargest([1, 7, 7, 7, 7]));
// ==============================================================================

// Q 19 Remove Duplicate from the sorted Array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// //  Brute Approach
// function removeDuplicates(nums) {
//   let set = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     set.add(nums[i]);
//   }
//   return Array.from(set).length;
// }
// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Better Approach
// function removeDuplicates(nums) {
//  return [...new Set(nums)]
// }
// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Optimal Approach
// function removeDuplicates(nums) {
//   i = 0;
//   for (let j = 1; j < nums.length; j++) {
//     if (nums[i] !== nums[j]) {
//       nums[i + 1] = nums[j];
//       i++;
//     }
//   }
//   return i+1;
// }
// console.log(removeDuplicates([1, 1, 2]));
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// // ============================================================================
// // Q 19 left  Rotate array by one place

// // Optimal Apprcoh
// function rotateOnePlace(arr) {
//   let temp = arr[0];
//   for (let j = 1; j < arr.length; j++) {
//     arr[j - 1] = arr[j];
//   }
//   arr[arr.length - 1] = temp;
//   return arr;
// }
// console.log(rotateOnePlace([1, 2, 3, 4, 5]));

// // ================================================================================
// // Q 20 .Rotate by k

// //Better Approach
// function rotateByK(nums, k) {
//  return nums.slice(-k).concat(nums.slice(0,nums.length-k))
// }
// console.log(rotateByK([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotateByK([-1, -100, 3, 99], 2));

// // ==========================================================================
// Q 21
// // Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// // Note that you must do this in-place without making a copy of the array.

// // Example 1:

// // Input: nums = [0,1,0,3,12]
// // Output: [1,3,12,0,0]
// // Example 2:

// // Input: nums = [0]
// // Output: [0]

// //Brute Approach
// function moveZeroToEnd(nums) {
//   let temp = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       temp.push(nums[i]);
//     }
//   }
//   for (let i = 0; i < temp.length; i++) {
//     nums[i] = temp[i];
//   }
//   for (let i = temp.length; i < nums.length; i++) {
//     nums[i] = 0;
//   }
//   return nums;
// }
// console.log(moveZeroToEnd([0, 1, 0, 3, 12]));
// console.log(moveZeroToEnd([0]));

// //Better Approach
// function moveZeroToEnd(nums) {
//  let nonZeroElm =[];
//  let zeroElm =[];
//  for(let  i=0;i<nums.length;i++){
//   if(nums[i]!==0){
//     nonZeroElm.push(nums[i])
//   }
//   else{
//     zeroElm.push(nums[i])
//   }
//  }
//  return nonZeroElm.concat(zeroElm)
// }
// console.log(moveZeroToEnd([0, 1, 0, 3, 12]));
// console.log(moveZeroToEnd([0]));
// ================================================================================
// Q 22
//Max consecutive ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

//optimal Approach
// function maxConOne(nums) {
//   let result = [];
//   let counter = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       counter++;
//     } else {
//       counter = 0;
//     }
//     result.push(counter);
//   }
//   return Math.max(...result);
// }
// console.log(maxConOne([1, 1, 0, 1, 1, 1]));
// console.log(maxConOne([1, 0, 1, 1, 0, 1]));

// ===============================================================================
// Q 23 single Number
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

//Brute Approach

function getSingleOne(nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count === 1) {
      return nums[i];
    }
  }
}
console.log(getSingleOne([2, 2, 1]));
console.log(getSingleOne([4, 1, 2, 1, 2]));
console.log(getSingleOne([1]));

//optimal Approach
// function getSingleOne(nums) {
//   let XOR = 0;
//   for(let  i=0;i<nums.length;i++){
//     XOR=XOR^nums[i]
//   }
//   return XOR
// }
// console.log(getSingleOne([2, 2, 1]));
// console.log(getSingleOne([4, 1, 2, 1, 2]));
// console.log(getSingleOne([1]));

// ==============================================================================
//Q 24
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

//Brute Approach
// function majorityElm(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count++;
//       }
//     }
//     if (count > nums.length / 2) {
//       return nums[i];
//     }
//   }
// }
// console.log(majorityElm([3, 2, 3]));
// console.log(majorityElm([2, 2, 1, 1, 1, 2, 2]));

// =============================================================================
//Q 25
// Best Time to buy before  and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

//Brute Approach
function maxProfit(prices) {
  let min = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    let cost = prices[i] - min;
    profit = Math.max(profit, cost);
    min = Math.min(min, prices[i]);
  }
  return profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

// =============================================================================
//Q 26Rearrange  Array the Element By Sign
// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should return the array of nums such that the the array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// Example 1:

// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.
// Example 2:

// Input: nums = [-1,1]
// Output: [1,-1]
// Explanation:
// 1 is the only positive integer and -1 the only negative integer in nums.
// So nums is rearranged to [1,-1].

//Brute Approach
// function rearrangeArr(nums) {
//   let pos = [];
//   let neg = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       neg.push(nums[i]);
//     } else {
//       pos.push(nums[i]);
//     }
//   }
//   for (let i = 0; i < nums.length / 2; i++) {
//     nums[i * 2] = pos[i];
//     nums[i * 2 + 1] = neg[i];
//   }
//   return nums;
// }
// console.log(rearrangeArr([3, 1, -2, -5, 2, -4]));
// console.log(rearrangeArr([-1, 1]));

// //Optimal Approach
// function rearrangeArr(nums) {
//   let result = [];
//   let posIndex = 0;
//   let negIndex = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       result[negIndex]=nums[i]
//       negIndex+=2;
//     } else {
//       result[posIndex]=nums[i]
//       posIndex+=2
//     }
//   }
//   return result

// }
// console.log(rearrangeArr([3, 1, -2, -5, 2, -4]));
// console.log(rearrangeArr([-1, 1]));

//=========================================================================
// Q 27
// Better Approach
// function longestConsecutive(nums) {
//   let max = 0;
//   let set = new Set(nums);
//   for (let num of set) {
//     if (set.has(num - 1)) {
//       continue;
//     }
//     let currNums = num;
//     let currMax = 1;
//     while (set.has(currNums + 1)) {
//       currNums++;
//       currMax++;
//     }
//     max = Math.max(max, currMax);
//   }
//   return max;
// }
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// ==============================================================================

// Q 28 Subarray Sum Equals of k

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

//Better Approach
// function subarraySum(nums, k) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];

//       if (sum === k) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// console.log(subarraySum([1, 1, 1], 2));
// console.log(subarraySum([1, 2, 3], 3));

// ==============================================================================
// Q 29
// Majaroity Element ||
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]
function majorityElm(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count > nums.length / 3) {
      result.push(nums[i]);
    }
  }
  return [...new Set(result)];
}
console.log(majorityElm([3, 2, 3]));
console.log(majorityElm([1]));
console.log(majorityElm([1, 2]));
// ============================================================================

// Q 31
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

function reverseTheString(s) {
  return s
    .split(" ")
    .reverse()
    .filter((elm) => elm != "")
    .join(" ");
}
console.log(reverseTheString("the sky is blue"));
console.log(reverseTheString("  hello world  "));
console.log(reverseTheString("a good   example"));
console.log(reverseTheString("  Bob    Loves  Alice   "));
// =============================================================================

// Q 32 Pow(x,n)
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

//Better Approach
// function myPow(x, n) {
//   let ans = 1;
//   let pow = Math.abs(n);
//   for (let i = 1; i <= pow; i++) {
//     ans = ans * x;
//   }
//   if (n < 0) {
//     ans = 1 / ans;
//   }
//   return ans;
// }
// console.log(myPow(2.0, 10));
// console.log(myPow(2.1, 3));
// console.log(myPow(2.0, -2));
// function myPow(x, n) {
//   if (n < 0) {
//     x = 1 / x;
//     n = -n;
//   }
//   let res = 1;
//   let current_Product = x;
//   while (n > 0) {
//     if (n % 2 === 1) {
//       res = res * current_Product;
//     }
//     current_Product = current_Product * current_Product;
//     n = Math.floor(n / 2);
//   }
//   return res;
// }
// console.log(myPow(2.0, 10));
// console.log(myPow(2.1, 3));
// console.log(myPow(2.0, -2));
// console.log(myPow(2, 4));

// ==============================================================================
// Q 33

//brute Approach
function check(s) {
  let str = s.replace(/[\W|_]/g, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(check("A man, a plan, a canal: Panama"));
console.log(check("race a car"));
console.log(check(" "));
console.log(check("0p"));
console.log(check("ab_a"));
//Better Approach
function check(s) {
  let modifiyS = s.replace(/[\W|_]/g, "").toLowerCase();
  return modifiyS == modifiyS.split("").reverse().join("");
}
console.log(check("A man, a plan, a canal: Panama"));
console.log(check("race a car"));
console.log(check(" "));
console.log(check("0p"));
console.log(check("ab_a"));

// ================================================================================
// // Q 34  Fibonacci Number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(1));
console.log(fib(3));
console.log(fib(4));
// // ============================================================================
// Q 35. N-th Tribonacci Number
// Easy
// Topics
// Companies
// Hint
// The Tribonacci sequence Tn is defined as follows:

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

// Example 1:

// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// Example 2:

// Input: n = 25
// Output: 1389537

function tribonacciNum(n) {
  let arr = [0, 1, 1];
  if (n <= 2) {
    return arr[n];
  }
  for (let i = 3; i <= n; i++) {
    let temp = arr[0] + arr[1] + arr[2];
    arr[0] = arr[1];
    arr[1] = arr[2];
    arr[2] = temp;
  }
  return arr[2];
}
console.log(tribonacciNum(4));
console.log(tribonacciNum(25));
// ===============================================================================
// Q 36 Climbing stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

function climbStairs(n) {
  let arr = [];
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}
console.log(climbStairs(2));
console.log(climbStairs(3));
// =====================================================================================
// // Q 37 Median of two sorted Array
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
// Brute Approach
function findMedinElmOfTwoArr(nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a, b) => a - b);
  let n = arr.length;
  if (n % 2 !== 0) {
    return arr[Math.floor(n / 2)];
  } else {
    return (arr[n / 2] + arr[n / 2 - 1]) / 2;
  }
}
console.log(findMedinElmOfTwoArr([1, 3], [2]));
console.log(findMedinElmOfTwoArr([1, 2], [3, 4]));

// ====================================================================================
// 38 maximum subarray sum
// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// //Better Approach
function maxSubArrSum(nums) {
  let max = nums[0];
  let sum = 0;
  nums.forEach((elm) => {
    sum += elm;
    max = Math.max(max, sum);
    if (sum < 0) sum = 0;
  });
  return max;
}
console.log(maxSubArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArrSum([1]));
console.log(maxSubArrSum([5, 4, -1, 7, 8]));
// ====================================================================================
// Q 39 Buy and sell Stock ||
// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

// Find and return the maximum profit you can achieve.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

//Brute Approach
function maxProfit(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 2, 1]));
// =======================================================================================
// // Q 40 Remove Duplicate form sorted Array ||
// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

function remoevDupSec(nums) {
  if (nums.length <= 2) return nums.length;
  let perv1 = nums[0];
  let perv2 = nums[1];
  let pivot = 2;
  for (let i = 2; i < nums.length; i++) {
    let curr = nums[i];
    if (curr != perv1 || curr != perv2) {
      nums[pivot] = curr;
      pivot += 1;
    }
    perv1 = perv2;
    perv2 = curr;
  }
  return pivot;
}
console.log(remoevDupSec([1, 1, 1, 2, 2, 3]));
console.log(remoevDupSec([0, 0, 1, 1, 1, 1, 2, 3, 3]));
// ====================================================================================
// Q 41 Largest Number
// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

// Example 1:

// Input: nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

function lasgestNumber(nums) {
  if (nums.every((elm) => elm === 0)) return "0";
  return nums
    .map((elm) => elm.toString())
    .sort((a, b) => {
      if (a + b > b + a) return -1;
      return 1;
    })
    .join("");
}
console.log(lasgestNumber([10, 2]));
console.log(lasgestNumber([3, 30, 34, 5, 9]));
console.log(lasgestNumber([0, 0, 0]));
// =================================================================================
// Q 42 Happy Number
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
Output: false;
function isHappyNumber(n) {
  let set = new Set();
  while (n !== 1) {
    let sum = 0;
    while (n > 0) {
      sum += (n % 10) * (n % 10);

      n = Math.floor(n / 10);
      console.log(n);
    }
    if (set.has(sum)) {
      return false;
    } else {
      set.add(sum);
      n = sum;
    }
  }
  return true;
}
console.log(isHappyNumber(19));
console.log(isHappyNumber(2));
// ========================================================================================
//43 Add Digits
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0
//Brute Approach
function addDigits(num) {
  let sum = 0;
  while (num >= 10) {
    sum += num % 10;
    num = Math.floor(num / 10);
    if (num < 10) {
      num += sum;
      sum = 0;
    }
  }
  return num;
}
console.log(addDigits(38));
console.log(addDigits(0));

function addDigits(num) {
  if (num < 10) return num;
  if (num % 9 === 0) return 9;
  return num % 9;
}
console.log(addDigits(38));
console.log(addDigits(0));

// ==================================================================================
// Q 44 count the digits That Divide a Number

// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

// Example 1:

// Input: num = 7
// Output: 1
// Explanation: 7 divides itself, hence the answer is 1.
// Example 2:

// Input: num = 121
// Output: 2
// Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.
// Example 3:

// Input: num = 1248
// Output: 4
// Explanation: 1248 is divisible by all of its digits, hence the answer is 4.

function countDigits(num) {
  let original = Math.abs(num);
  let sum = 0;
  let temp = original;
  while (num !== 0) {
    let digits = num % 10;
    if (temp % digits === 0 && digits != 0) {
      sum++;
    }
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(countDigits(7));
console.log(countDigits(121));
console.log(countDigits(1248));
// =======================================================================================

// 45 uggly Number
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

//Brute Approach
function isUggly(n) {
  if (n === 0) return false;
  while (n !== 1) {
    if (n % 2 == 0) {
      n = n / 2;
      continue;
    }
    if (n % 3 == 0) {
      n = n / 3;
      continue;
    }
    if (n % 5 == 0) {
      n = n / 3;
      continue;
    }
    return false;
  }
  return true;
}
console.log(isUggly(6));
console.log(isUggly(1));
console.log(isUggly(14));

//Better Appraoch
function isUggly(n) {
  if (n === 0) return false;
  while (n % 5 === 0) {
    n = n / 5;
  }
  while (n % 2 === 0) {
    n = n / 2;
  }
  while (n % 3 === 0) {
    n = n / 3;
  }
  return n == 1;
}
console.log(isUggly(6));
console.log(isUggly(1));
console.log(isUggly(14));

// ======================================================================================
// Q 46 Palindorm number
// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
function isPalindrom(x) {
  let dup = x;
  let reverse = 0;
  while (x > 0) {
    let lastDigits = x % 10;
    x = Math.floor(x / 10);
    reverse = reverse * 10 + lastDigits;
  }
  return reverse === dup;
}
console.log(isPalindrom(121));
console.log(isPalindrom(-121));
console.log(isPalindrom(10));
// =======================================================================================
// 47 Search insert position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

function sreachInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || nums[i] > target) {
      return i;
    }
  }
  return nums.length;
}
console.log(sreachInsert([1, 3, 5, 6], 5));
console.log(sreachInsert([1, 3, 5, 6], 2));
console.log(sreachInsert([1, 3, 5, 6], 7));
console.log(sreachInsert([1, 3, 5, 6], 7));
console.log(sreachInsert([1, 6], 7));

// Better
function sreachInsert(nums, target) {
  let left = 0;
  let right = nums.length;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
}
console.log(sreachInsert([1, 3, 5, 6], 5));
console.log(sreachInsert([1, 3, 5, 6], 2));
console.log(sreachInsert([1, 3, 5, 6], 7));
console.log(sreachInsert([1, 3, 5, 6], 7));
console.log(sreachInsert([1], 0));
// ==============================================================================
// Q 48 Find the closest number to Zero
// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

// Example 1:

// Input: nums = [-4,-2,1,4,8]
// Output: 1
// Explanation:
// The distance from -4 to 0 is |-4| = 4.
// The distance from -2 to 0 is |-2| = 2.
// The distance from 1 to 0 is |1| = 1.
// The distance from 4 to 0 is |4| = 4.
// The distance from 8 to 0 is |8| = 8.
// Thus, the closest number to 0 in the array is 1.
// Example 2:

// Input: nums = [2,-1,1]
// Output: 1
// Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.

function findClosetNumber(nums) {
  if (nums.length === 0) return null;
  let closest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (
      Math.abs(nums[i]) < Math.abs(closest) ||
      (Math.abs(nums[i]) === Math.abs(closest) && nums[i] > closest)
    ) {
      closest = nums[i];
    }
  }
  return closest;
}
console.log(findClosetNumber([-4, -2, 1, 4, 8]));
console.log(findClosetNumber([2, -1, 1]));
// =======================================================================================
// Q 49 contains duplicate ||

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

//Brute Approach
function isCountainDup(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
}
console.log(isCountainDup([1, 2, 3, 1], 3));
console.log(isCountainDup([1, 0, 1, 1], 1));
console.log(isCountainDup([1, 2, 3, 1, 2, 3], 2));

//Better Approach
function isCountainDup(nums, k) {
  const map = new Map();
  for (let index in nums) {
    if (!map.has(nums[index])) map.set(nums[index], index);
    else if (Math.abs(map.get(nums[index]) - index) <= k) return true;
    map.set(nums[index], index);
  }
  return false;
}
console.log(isCountainDup([1, 2, 3, 1], 3));
console.log(isCountainDup([1, 0, 1, 1], 1));
console.log(isCountainDup([1, 2, 3, 1, 2, 3], 2));
// ======================================================================================
// Q 50 intersection of Two  Array

// Given two integer arrays nums1 and nums2, return an array of their
// intersection
// . Each element in the result must be unique and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
//Brute Approach
function intersection(nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let intersection = [...set1].filter((elm) => set2.has(elm));
  return intersection;
}
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

// Better Approach
function intersection(nums1, nums2) {
  return Array.from(new Set(nums1).intersection(new Set(nums2)));
}
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

//Optimal
function intersection(nums1, nums2) {
  let res = [];
  let uniqueArr1 = [...new Set(nums1)].sort((a, b) => a - b);
  let uniqueArr2 = [...new Set(nums2)].sort((a, b) => a - b);

  for (let i = 0; i < uniqueArr1.length; i++) {
    let temp = uniqueArr1[i];
    for (let i = 0; i < uniqueArr2.length; i++) {
      if (temp === uniqueArr2[i]) {
        res.push(temp);
      }
    }
  }
  return res;
}
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
// =====================================================================================
// Q51 Intersection of two Array ||
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.
function interect(nums1, nums2) {
  let countMap = new Map();
  //count each elm occurrnce in nums1
  for (let num of nums1) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  let res = [];
  for (let num of nums2) {
    if (countMap.has(num) && countMap.get(num) > 0) {
      res.push(num);
      countMap.set(num, countMap.get(num) - 1);
    }
  }
  return res;
}
console.log(interect([1, 2, 2, 1], [2, 2]));
console.log(interect([4, 9, 5], [9, 4, 9, 8, 4]));
// ======================================================================================
// Q 52  Intercestion of multiple Arrays
// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.

// Example 1:

// Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
// Output: [3,4]
// Explanation:
// The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].
// Example 2:

// Input: nums = [[1,2,3],[4,5,6]]
// Output: []
// Explanation:
// There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].

function intersectionOfMutipleArr(nums) {
  let flatArr = nums.flat(Infinity);
  const map = new Map();
  for (let nums of flatArr) {
    map.set(nums, (map.get(nums) || 0) + 1);
  }
  let res = [];
  for (let [num, count] of map.entries()) {
    if (count === nums.length) {
      res.push(num);
    }
  }
  return res.sort((a, b) => a - b);
}
console.log(
  intersectionOfMutipleArr([
    [3, 1, 2, 4, 5],
    [1, 2, 3, 4],
    [3, 4, 5, 6],
  ])
);
console.log(
  intersectionOfMutipleArr([
    [1, 2, 3],
    [4, 5, 6],
  ])
);

// =======================================================================================
// Q 53 find the distance of two Arrays
// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
// Example 2:

// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

//Brute Approach
function diiference(nums1, nums2) {
  let ans = [];
  let x = new Set();
  let y = new Set();
  for (let i = 0; i < nums1.length; i++) {
    if (!nums2.includes(nums1[i])) {
      x.add(nums1[i]);
    }
  }
  ans.push(Array.from(x));

  for (let i = 0; i < nums2.length; i++) {
    if (!nums1.includes(nums2[i])) {
      y.add(nums2[i]);
    }
  }
  ans.push(Array.from(y));
  return ans;
}
console.log(diiference([1, 2, 3], [2, 4, 6]));
console.log(diiference([1, 2, 3, 3], [1, 1, 2, 2]));

//Better Approach
function diiference(nums1, nums2) {
  let ans = [];
  let x = Array.from(new Set(nums1.filter((elm) => !nums2.includes(elm))));
  let y = Array.from(new Set(nums2.filter((elm) => !nums1.includes(elm))));
  ans[0] = x;
  ans[1] = y;
  return ans;
}
console.log(diiference([1, 2, 3], [2, 4, 6]));
console.log(diiference([1, 2, 3, 3], [1, 1, 2, 2]));
// ========================================================================================
// Q 54 minimum common value
// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
// Example 2:

// Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// Output: 2
// Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.

//Better Approach
function minimumCommonValue(nums1, nums2) {
  let set1 = new Set(nums1);
  let commonElm = nums2.filter((elm) => set1.has(elm));
  return commonElm.length > 0 ? Math.min(...commonElm) : -1;
}
console.log(minimumCommonValue([1, 2, 3], [2, 4]));
console.log(minimumCommonValue([1, 2, 3, 6], [2, 3, 4, 5]));
// =====================================================================================

// 56 Thrid maximum number

// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

//Brute Approach Tc-o(n3)
function thirdMaxNum(nums) {
  //sort the in decending order
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[0];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }
  //remove duplicate
  let firstElm = nums[0];
  let res = [firstElm];
  for (let i = 1; i < nums.length; i++) {
    if (firstElm !== nums[i]) {
      firstElm = nums[i];
      res.push(nums[i]);
    }
  }
  index = res.indexOf(Math.max(...res)) + 2;
  return res.length > 2 ? res[index] : res[0];
}
console.log(thirdMaxNum([3, 2, 1]));
console.log(thirdMaxNum([1, 2]));
console.log(thirdMaxNum([2, 2, 3, 1]));
console.log(thirdMaxNum([2, 2, 3, 1]));
console.log(thirdMaxNum([5, 5, 5, 5, 1, 2, 3])); // 2 (distinct numbers: 5, 3, 2, 1)

//Better Approach
function thirdMaxNum(nums) {
  let res = [...new Set(nums.sort((a, b) => b - a))];
  return res.length > 2 ? res[2] : res[0];
}
console.log(thirdMaxNum([3, 2, 1]));
console.log(thirdMaxNum([1, 2]));
console.log(thirdMaxNum([2, 2, 3, 1]));
console.log(thirdMaxNum([2, 2, 3, 1])); // 1
console.log(thirdMaxNum([1, 1, 1])); // 1 (only one distinct number)
console.log(thirdMaxNum([-1, -2, -3, -4])); // -3 (distinct numbers: -1, -2, -3, -4)
// =======================================================================================
// Q 57 Neither minimum nor maximum
// Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.

// Return the selected integer.

// Example 1:

// Input: nums = [3,2,1,4]
// Output: 2
// Explanation: In this example, the minimum value is 1 and the maximum value is 4. Therefore, either 2 or 3 can be valid answers.
// Example 2:

// Input: nums = [1,2]
// Output: -1
// Explanation: Since there is no number in nums that is neither the maximum nor the minimum, we cannot select a number that satisfies the given condition. Therefore, there is no answer.
// Example 3:

// Input: nums = [2,1,3]
// Output: 2
// Explanation: Since 2 is neither the maximum nor the minimum value in nums, it is the only valid answer.

//Brute Approach
function findNonMinOrMax(nums) {
  nums.sort((a, b) => a - b);
  if (nums.length <= 2) return -1;
  let min = Math.min(...nums);
  let max = Math.max(...nums);
  for (let num of nums) {
    if (num !== min && num !== max) {
      return num;
    }
  }
  return -1;
}
console.log(findNonMinOrMax([3, 2, 1, 4]));
console.log(findNonMinOrMax([1, 2]));
console.log(findNonMinOrMax([2, 1, 3]));
console.log(findNonMinOrMax([2]));

//Better Appraoch
function findNonMinOrMax(nums) {
  nums.sort((a, b) => a - b);
  let arr = nums.slice(1, nums.length - 1);
  return arr.length === 0 ? -1 : Math.min(...arr);
}
console.log(findNonMinOrMax([3, 2, 1, 4]));
console.log(findNonMinOrMax([1, 2]));
console.log(findNonMinOrMax([2, 1, 3]));
console.log(findNonMinOrMax([2]));

function findNonMinOrMax(nums) {
  nums.sort((a, b) => a - b);
  return nums.length <= 2
    ? -1
    : nums.find(
        (elm) => Math.min(...nums) !== elm && Math.max(...nums) !== elm
      );
}
console.log(findNonMinOrMax([3, 2, 1, 4]));
console.log(findNonMinOrMax([1, 2]));
console.log(findNonMinOrMax([2, 1, 3]));
console.log(findNonMinOrMax([2]));
// =====================================================================================
// Q 58 Valid parenthes
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

function isValidParenthes(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(")");
    } else if (s[i] === "{") {
      stack.push("}");
    } else if (s[i] === "[") {
      stack.push("]");
    } else if (s[i] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
}
console.log(isValidParenthes("()"));
console.log(isValidParenthes("()[]{}"));
console.log(isValidParenthes("(]"));
console.log(isValidParenthes("([])"));

// =======================================================================================
// Q 59 power of two
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

function isPowerOfTwo(n) {
  let i = 1;
  while (i < n) {
    i *= 2;
  }
  return i === n;
}
console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
// ========================================================================================
// Q 60 Power of three
// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:

// Input: n = 27
// Output: true
// Explanation: 27 = 33
// Example 2:

// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.
// Example 3:

// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).

function powerOfThree(n) {
  let i = 1;
  while (i < n) {
    i *= 3;
  }
  return i === n;
}
console.log(powerOfThree(27));
console.log(powerOfThree(0));
console.log(powerOfThree(-1));
// ====================================================================================
// // Q 61 First unique Char
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1

//Brute Approach
function firstUniqueChar(s) {
  for (let i = 0; i < s.length; i++) {
    let count = 0;
    for (let j = 0; j < s.length; j++) {
      if (s[i] === s[j]) {
        count++;
      }
    }
    if (count === 1) {
      return i;
    }
  }
  return -1;
}
console.log(firstUniqueChar("leetcode"));
console.log(firstUniqueChar("loveleetcode"));
console.log(firstUniqueChar("aabb"));

//Optimal Approach
function firstUniqueChar(s) {
  let countOccurr = {};
  for (let char of s) {
    if (countOccurr[char]) {
      countOccurr[char]++;
    } else {
      countOccurr[char] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (countOccurr[char] === 1) {
      return i;
    }
  }
  return -1;
}
console.log(firstUniqueChar("leetcode"));
console.log(firstUniqueChar("loveleetcode"));
console.log(firstUniqueChar("aabb"));
// ======================================================================================
// Q 62 First letter appear twice
// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

// Note:

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
// Explanation:wice is 'd' so we return
// The only letter that appears t 'd'.
function repeatedChar(s) {
  let set = new Set();

  for (let char of s) {
    if (set.has(char)) {
      return char;
    }
    set.add(char);
  }
}

console.log(repeatedChar("abccbaacz"));
console.log(repeatedChar("abcdd"));
// ========================================================================================
// Q 63 valid prefect squares
// Given a positive integer num, return true if num is a perfect square or false otherwise.

// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

// You must not use any built-in library function, such as sqrt.

// Example 1:

// Input: num = 16
// Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
// Example 2:

// Input: num = 14
// Output: false
// Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

//Brute
function isPrefectSqures(num) {
  for (let i = 1; i <= num; i++) {
    if (i * i === num) {
      return true;
    } else if (i * i > num) {
      return false;
    }
  }
}
console.log(isPrefectSqures(16));
console.log(isPrefectSqures(14));

//Better
function isPrefectSqures(num) {
  return Number.isInteger(Math.sqrt(num));
}
console.log(isPrefectSqures(16));
console.log(isPrefectSqures(14));
// ======================================================================================
// Q 64 Sum of Squres of sepical Elements
// You are given a 1-indexed integer array nums of length n.

// An element nums[i] of nums is called special if i divides n, i.e. n % i == 0.

// Return the sum of the squares of all special elements of nums.
// Example 1:

// Input: nums = [1,2,3,4]
// Output: 21
// Explanation: There are exactly 3 special elements in nums: nums[1] since 1 divides 4, nums[2] since 2 divides 4, and nums[4] since 4 divides 4.
// Hence, the sum of the squares of all special elements of nums is nums[1] * nums[1] + nums[2] * nums[2] + nums[4] * nums[4] = 1 * 1 + 2 * 2 + 4 * 4 = 21.
// Example 2:

// Input: nums = [2,7,1,19,18,3]
// Output: 63
// Explanation: There are exactly 4 special elements in nums: nums[1] since 1 divides 6, nums[2] since 2 divides 6, nums[3] since 3 divides 6, and nums[6] since 6 divides 6.
// Hence, the sum of the squares of all special elements of nums is nums[1] * nums[1] + nums[2] * nums[2] + nums[3] * nums[3] + nums[6] * nums[6] = 2 * 2 + 7 * 7 + 1 * 1 + 3 * 3 = 63.

//Brute Approach
function sumOfSpeicalEm(nums) {
  let sum = 0;
  let n = nums.length;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += nums[i - 1] * nums[i - 1];
    }
  }
  return sum;
}
console.log(sumOfSpeicalEm([1, 2, 3, 4]));
console.log(sumOfSpeicalEm([2, 7, 1, 19, 18, 3]));

//Better Appraoch

function sumOfSpeicalEm(nums) {
  let sum = 0;
  let n = nums.length;
  nums.forEach((num, i) => {
    if (n % (i + 1) == 0) {
      sum += num * num;
    }
  });
  return sum;
}
console.log(sumOfSpeicalEm([1, 2, 3, 4]));
console.log(sumOfSpeicalEm([2, 7, 1, 19, 18, 3]));

function sumOfSpeicalEm(nums) {
  return nums
    .filter((num, i) => nums.length % (i + 1) == 0)
    .map((elm) => elm ** 2)
    .reduce((acc, curr) => acc + curr, 0);
}
console.log(sumOfSpeicalEm([1, 2, 3, 4]));
console.log(sumOfSpeicalEm([2, 7, 1, 19, 18, 3]));

// ======================================================================================
// Q 65 Sum of Squres Number
// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:

// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5
// Example 2:

// Input: c = 3
// Output: false

//Brute Approach
function sumOfSquaresNum(n) {
  if (n < 0) return false;
  let l = 0;
  let r = Math.floor(Math.sqrt(n));
  let t;
  while (l <= r) {
    t = l * l + r * r;
    if (t == n) {
      return true;
    } else if (t < n) {
      l++;
    } else {
      r--;
    }
  }
  return false;
}
console.log(sumOfSquaresNum(5));
console.log(sumOfSquaresNum(3));
// =====================================================================================
// Q 66 Find the difference
// You are given two strings s and t.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Return the letter that was added to t.

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"
//Brute Approach
function findTheDifference(s, t) {
  s = s.split("").sort();
  t = t.split("").sort();
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== s[i]) {
      return t[i];
    }
  }
  return t[t.length - 1];
}
console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("", "y"));

function findTheDifference(s, t) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result ^= s.charCodeAt(i);
  }
  for (let i = 0; i < t.length; i++) {
    result ^= t.charCodeAt(i);
  }
  return String.fromCharCode(result);
}
console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("", "y"));

// ======================================================================================
// Q 67 Find Smallest Letter Greater then Target
// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
// Example 3:

// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

function nextGreaterLetter(letters, target) {
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt() > target.charCodeAt()) {
      return letters[i];
    }
  }
  return letters.length;
}
console.log(nextGreaterLetter(["c", "f", "j"], "a"));
console.log(nextGreaterLetter(["c", "f", "j"], "c"));
console.log(nextGreaterLetter(["x", "x", "y", "y"], "z"));

function nextGreaterLetter(letters, target) {
  let l = 0;
  let r = letters.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (letters[mid].charCodeAt() > target.charCodeAt()) r = mid - 1;
    else l = mid + 1;
  }
  return l === letters.length ? letters[0] : letters[l];
}
console.log(nextGreaterLetter(["c", "f", "j"], "a"));
console.log(nextGreaterLetter(["c", "f", "j"], "c"));
console.log(nextGreaterLetter(["x", "x", "y", "y"], "z"));
// ========================================================================================
// Q 68 Count Elements with strictly samller and greater then Element
// Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

// Example 1:

// Input: nums = [11,7,2,15]
// Output: 2
// Explanation: The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it.
// Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it.
// In total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.
// Example 2:

// Input: nums = [-3,3,3,90]
// Output: 2
// Explanation: The element 3 has the element -3 strictly smaller than it and the element 90 strictly greater than it.
// Since there are two elements with the value 3, in total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.
function countElements(nums) {
  if (nums.length < 3) return 0; // If there are fewer than 3 elements, none can have both a smaller and a greater element

  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return nums.filter((elm) => elm !== min && elm !== max).length;
}
console.log(countElements([11, 7, 2, 15]));
console.log(countElements([-3, 3, 3, 90]));
console.log(countElements([-71, -71, 93, -71, 40]));
console.log(countElements([-71, -71, 93, -71]));
// ====================================================================================
// 69 Maximum count of positive and negaitve.
// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

// Example 1:

// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 2:

// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 3:

// Input: nums = [5,20,66,1314]
// Output: 4
// Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

//Brute Appraoch
function maximunCount(nums) {
  let pos = 0;
  let neg = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      pos++;
    } else if (nums[i] < 0) {
      neg++;
    }
  }
  if (pos === neg) {
    return neg;
  } else if (pos < neg) {
    return neg;
  }
  return pos;
}
console.log(maximunCount([-2, -1, -1, 1, 2, 3]));
console.log(maximunCount([-3, -2, -1, 0, 0, 1, 2]));
console.log(maximunCount([5, 20, 66, 1314]));

//Better Appraoch
function maximunCount(nums) {
  let x = nums.filter((elm) => elm < 0 && elm !== 0);
  let y = nums.filter((elm) => elm !== 0 && elm > 0);
  return Math.max(...[x.length, y.length]);
}
console.log(maximunCount([-2, -1, -1, 1, 2, 3]));
console.log(maximunCount([-3, -2, -1, 0, 0, 1, 2]));
console.log(maximunCount([5, 20, 66, 1314]));

// ========================================================================================
// Q 70 Count negtive number in a sorted Matrix
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0

function countNeg(grid) {
  let count = 0;
  let m = grid.length;
  let n = grid[0].length;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (grid[j][i] >= 0) break;
      count++;
    }
  }
  return count;
}
console.log(
  countNeg([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
console.log(
  countNeg([
    [3, 2],
    [1, 0],
  ])
);

// Better Approach

function countNeg(grid) {
  let count = grid.reduce((acc, curr) => {
    return (
      acc +
      curr.reduce((innerAcc, innerCurr) => {
        return innerCurr < 0 ? innerAcc + 1 : innerAcc;
      }, 0)
    );
  }, 0);
  return count;
}
console.log(
  countNeg([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
console.log(
  countNeg([
    [3, 2],
    [1, 0],
  ])
);
// =========================================================================================
// 71 Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
function reverseInteger(x) {
  const INT_MIN = 2 ** 31 * -1;
  const INT_MAX = 2 ** 31 - 1;
  let reverse = 0;
  let sign = Math.sign(x);
  x = Math.abs(x);
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);

    x = Math.floor(x / 10);
  }
  if (reverse < INT_MIN || reverse > INT_MAX) {
    return 0;
  }

  return reverse * sign;
}
console.log(reverseInteger(123));
console.log(reverseInteger(-123));
console.log(reverseInteger(120));
// ====================================================================================
// 72 A Numer After  a double Reverse
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

// function reverseNumber(x) {
//   let reverse = 0;
//   while (x > 0) {
//     reverse = reverse * 10 + (x % 10);
//     x = Math.floor(x / 10);
//   }
//   return reverse;
// }
// function isSamAfterTheDoubleReverse(num) {
//   let reversed1 = reverseNumber(num);
//   let reversed2 = reverseNumber(reversed1);
//   return reversed2 === num;
// }
// console.log(isSamAfterTheDoubleReverse(526));
// console.log(isSamAfterTheDoubleReverse(1800));
// console.log(isSamAfterTheDoubleReverse(0));

// ====================================================================================
// 73Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:
function romamToInt(s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      total = total - roman[s[i]];
    } else {
      total = total + roman[s[i]];
    }
  }
  return total;
}
console.log(romamToInt("III"));
console.log(romamToInt("LVIII"));
console.log(romamToInt("MCMXCIV"));
// =======================================================================================
// Q 74 First missing postive
// Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.
//Brute Approach
function firstMissingPosElm(nums) {
  let num = [...new Set(nums)].filter((elm) => elm > 0).sort((a, b) => a - b);

  let j = 1;
  for (let i = 0; i < num.length; i++) {
    if (j === num[i]) {
      j++;
    } else {
      return j;
    }
  }
  return j;
}
console.log(firstMissingPosElm([1, 2, 0]));
console.log(firstMissingPosElm([3, 4, -1, 1]));
console.log(firstMissingPosElm([7, 8, 9, 11, 12]));
// Tc-o(n log n)

//Optimal Approach
function firstMissingPosElm(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = 1;
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!obj[i]) {
      return i;
    }
  }
  return nums.length + 1;
}
console.log(firstMissingPosElm([1, 2, 0]));
console.log(firstMissingPosElm([3, 4, -1, 1]));
console.log(firstMissingPosElm([7, 8, 9, 11, 12]));
// TC o(n)
// ================================================================================
// Q 75 Find the duplicate Number
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [3,3,3,3,3]
// Output: 3

//Brute Approach
function findDuplicateElm(nums) {
  let obj = {};
  for (let elm of nums) {
    if (!obj[elm]) {
      obj[elm] = 1;
    } else {
      return elm;
    }
  }
}
console.log(findDuplicateElm([1, 3, 4, 2, 2]));
console.log(findDuplicateElm([3, 1, 3, 4, 2]));
console.log(findDuplicateElm([3, 3, 3, 3, 3]));

function findDuplicateElm(nums) {
  return Number(
    [...new Set(nums.filter((elm, i) => i !== nums.indexOf(elm)))].join("")
  );
  // i    firstIndex
  // 0      0
  // 1      1
  // 2      2
  // 3      3
  // 4      3
}
console.log(findDuplicateElm([1, 3, 4, 2, 2]));
console.log(findDuplicateElm([3, 1, 3, 4, 2]));
console.log(findDuplicateElm([3, 3, 3, 3, 3]));
// =======================================================================================
// Q 73 set Mismatch
// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]

//Better Appraoch
function ErrorNums(nums) {
  let result = [];
  n = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      x = nums[i];
    }
  }
  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) {
      y = i;
    }
  }
  result[0] = x;
  result[1] = y;
  return result;
}
console.log(ErrorNums([1, 2, 2, 4]));
console.log(ErrorNums([1, 1]));

function ErrorNums(nums) {
  let output = [];
  //get duplicate elm
  for (let num of nums) {
    num = Math.abs(num);
    if (nums[num - 1] < 0) {
      output.push(num);
    } else {
      nums[num - 1] *= -1;
    }
  }
  //missing elm
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      output.push(i + 1);
      return output;
    }
  }
}
console.log(ErrorNums([1, 2, 2, 4]));
console.log(ErrorNums([1, 1]));
// =====================================================================================
// Q 74 Find the XOR of numbers which appear Twice
// You are given an array nums, where each number in the array appears either once or twice.

// Return the bitwise XOR of all the numbers that appear twice in the array, or 0 if no number appears twice.

// Example 1:

// Input: nums = [1,2,1,3]

// Output: 1

// Explanation:

// The only number that appears twice in nums is 1.

// Example 2:

// Input: nums = [1,2,3]

// Output: 0

// Explanation:

// No number appears twice in nums.

// Example 3:

// Input: nums = [1,2,2,1]

// Output: 3

// Explanation:

// Numbers 1 and 2 appeared twice. 1 XOR 2 == 3.

function duplicateNumbersXOR(nums) {
  let XOR = 0;
  let frequncyMap = new Map();
  // console.log(frequncyMap);

  for (let num of nums) {
    frequncyMap[num] = (frequncyMap[num] || 0) + 1;
  }
  for (let num in frequncyMap) {
    if (frequncyMap[num] === 2) {
      XOR ^= Number(num);
    }
  }

  return XOR;
}
console.log(duplicateNumbersXOR([1, 2, 1, 3]));
console.log(duplicateNumbersXOR([1, 2, 3]));
console.log(duplicateNumbersXOR([1, 2, 2, 1]));

function duplicateNumbersXOR(nums) {
  let map = new Map();
  let result = [];
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (let [i, v] of map) {
    if (v > 1) {
      result.push(i);
    }
  }
  return result.reduce((a, b) => a ^ b, 0) || 0;
}
console.log(duplicateNumbersXOR([1, 2, 1, 3]));
console.log(duplicateNumbersXOR([1, 2, 3]));
console.log(duplicateNumbersXOR([1, 2, 2, 1]));

// =====================================================================================
//75 Valid number
// Given a string s, return whether s is a valid number.

// For example, all the following are valid numbers: "2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789", while the following are not valid numbers: "abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53".

// Formally, a valid number is defined using one of the following definitions:

// An integer number followed by an optional exponent.
// A decimal number followed by an optional exponent.
// An integer number is defined with an optional sign '-' or '+' followed by digits.

// A decimal number is defined with an optional sign '-' or '+' followed by one of the following definitions:

// Digits followed by a dot '.'.
// Digits followed by a dot '.' followed by digits.
// A dot '.' followed by digits.
// An exponent is defined with an exponent notation 'e' or 'E' followed by an integer number.

// The digits are defined as one or more digits.

// Example 1:

// Input: s = "0"

// Output: true

// Example 2:

// Input: s = "e"

// Output: false

// Example 3:

// Input: s = "."

// Output: false;
//Brute Appraoch
function isValid(s) {
  return (
    (Number(s) === 0 || !!Number(s)) &&
    s.trim() !== " " &&
    s !== "Infinity" &&
    s !== "-Infinity" &&
    s !== "+Infinity"
  );
}
console.log(isValid("0"));
console.log(isValid("e"));
console.log(isValid("."));

//Better Appraoch
function isValid(s) {
  const regex = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
  return regex.test(s);
}
console.log(isValid("0"));
console.log(isValid("e"));
console.log(isValid("."));

// =======================================================================================
// Q 76 Score of a string
// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

// Example 1:

// Input: s = "hello"

// Output: 13

// Explanation:

// The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

// Example 2:

// Input: s = "zaz"

// Output: 50

// Explanation:

// The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.

//Brute Approach
function calculateTheScore(s) {
  let score = 0;
  for (let i = 0; i < s.length - 1; i++) {
    score += Math.abs(s[i].charCodeAt() - s[i + 1].charCodeAt());
  }
  return score;
}
console.log(calculateTheScore("hello"));
console.log(calculateTheScore("zaz"));

//Better Approach

function calculateTheScore(s) {
  let chars = Array.from(s);
  return chars.reduce((acc, curr, index) => {
    // index ===0 skip (acc=0)
    if (index === 0) return acc;
    return (
      acc + Math.abs(chars[index - 1].charCodeAt() - chars[index].charCodeAt())
    );
  }, 0);
}
console.log(calculateTheScore("hello"));
console.log(calculateTheScore("zaz"));

// =====================================================================================
// // Q 77find the maximum Achievable Number
// Given two integers, num and t. A number is achievable if it can become equal to num after applying the following operation:

// Increase or decrease the number by 1, and simultaneously increase or decrease num by 1.
// Return the maximum achievable number after applying the operation at most t times.

// Example 1:
// Input: num = 4, t = 1
// Output: 6
// Explanation:
// Apply the following operation once to make the maximum achievable number equal to num:
// Decrease the maximum achievable number by 1, and increase num by 1.
// Example 2:
// Input: num = 3, t = 2
// Output: 7

// Explanation:
// Apply the following operation twice to make the maximum achievable number equal to num:

// Decrease the maximum achievable number by 1, and increase num by 1.
//x-t=num+t;
//x=num+t+t;
//x=num+2*(t)

//Brute Approach
function TheMaximumAchribleX(num, t) {
  for (let i = 0; i < t; i++) {
    num += 2;
  }
  return num;
}
console.log(TheMaximumAchribleX(4, 1));
console.log(TheMaximumAchribleX(3, 2));

//Better Approach
function TheMaximumAchribleX(num, t) {
  return num + 2 * t;
}
console.log(TheMaximumAchribleX(4, 1));
console.log(TheMaximumAchribleX(3, 2));
// ====================================================================================
// Q 78 Return the length of Arugment passed
// Write a function argumentsLength that returns the count of arguments passed to it.
// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
// Example 2:

// Input: args = [{}, null, "3"]
// Output: 3
// Explanation:
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.
function argumentsLength(...args) {
  return args.length;
}
console.log(argumentsLength(5)); // Output: 1
console.log(argumentsLength({}, null, "3")); // Output: 3

function argumentsLength(...args) {
  let count = 0;
  for (let i = 0; i < args.length; i++) {
    count++;
  }
  return count;
}
console.log(argumentsLength(5)); // Output: 1
console.log(argumentsLength({}, null, "3")); // Output: 3

function argumentsLength(...args) {
  return Object.keys(args).length;
}
console.log(argumentsLength(5)); // Output: 1
console.log(argumentsLength({}, null, "3")); // Output: 3

// ====================================================================================
// Q 79 Converted the Temperature
// You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.

// You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].

// Return the array ans. Answers within 10-5 of the actual answer will be accepted.

// Note that:

// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00

// Example 1:

// Input: celsius = 36.50
// Output: [309.65000,97.70000]
// Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.
// Example 2:

// Input: celsius = 122.11
// Output: [395.26000,251.79800]
// Explanation: Temperature at 122.11 Celsius converted in Kelvin is 395.26 and converted in Fahrenheit is 251.798.

function convertTemp(Celsius) {
  Kelvin = Celsius + 273.15;
  Fahrenheit = Celsius * 1.8 + 32.0;
  return [Kelvin, Fahrenheit];
}
console.log(convertTemp(36.5));
console.log(convertTemp(122.11));

function convertTemp(celsius) {
  let result = [];
  result.unshift((Kelvin = celsius + 273.15));
  result.push((Fahrenheit = celsius * 1.8 + 32.0));
  return result;
}
console.log(convertTemp(36.5));
console.log(convertTemp(122.11));
// ======================================================================================
// Q 80 Final the value after performing Operations
// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

// Example 1:

// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.
// Example 2:

// Input: operations = ["++X","++X","X++"]
// Output: 3
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// ++X: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// X++: X is incremented by 1, X = 2 + 1 = 3.
// Example 3:

// Input: operations = ["X++","++X","--X","X--"]
// Output: 0
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// X++: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// --X: X is decremented by 1, X = 2 - 1 = 1.
// X--: X is decremented by 1, X = 1 - 1 = 0.

//Better Approach
function finalValueAfterOperations(operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "X++" || operations[i] === "++X") {
      x++;
    } else {
      x--;
    }
  }
  return x;
}
console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
console.log(finalValueAfterOperations(["++X", "++X", "X++"]));
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));

//Better Approach
function finalValueAfterOperations(operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    x += operations[i][1] === "+" ? 1 : -1;
  }
  return x;
}
console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
console.log(finalValueAfterOperations(["++X", "++X", "X++"]));
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]));
// =====================================================================================
// Q 81 Find the word containing Character
// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

// Example 1:

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
// Example 2:

// Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
// Output: [0,2]
// Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
// Example 3:

// Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
// Output: []
// Explanation: "z" does not occur in any of the words. Hence, we return an empty array.
//Brute Approach
function findWordsContaining(words, x) {
  let index = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      index.push(i);
    }
  }
  return index;
}
console.log(findWordsContaining(["leet", "code"], "e"));
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z"));
console.log(findWordsContaining(["aaa", "acd", "aaaa", "aaa"], "a"));

//Better Approach
function findWordsContaining(words, x) {
  return words
    .map((word, index) => (word.includes(x) ? index : -1))
    .filter((index) => index !== -1);
}
console.log(findWordsContaining(["leet", "code"], "e"));
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z"));

//optimal Approach
function findWordsContaining(words, x) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i].charAt(j) === x) {
        result.push(i);
        break;
      }
    }
  }
  return result;
}
console.log(findWordsContaining(["leet", "code"], "e"));
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z"));
// =======================================================================================
// Q 82 Merge sorted  Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

//Optimal Approach
function merge(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;
  while (second >= 0) {
    fVal = nums1[first];
    sVal = nums2[second];
    if (fVal > sVal) {
      nums1[i] = fVal;
      first--;
    } else {
      nums1[i] = sVal;
      second--;
    }
    i--;
  }
  return nums1;
}
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));

//Better Approach
var merge = function (nums1, m, nums2, n) {
  var j = 0;
  for (let i = nums1.length; i >= m; i--) {
    if (nums1[i] === 0) {
      nums1.splice(i, 1);
      nums1.push(nums2[j]);
      j++;
    }
  }
  return nums1.sort((a, b) => a - b);
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
// var merge = function(nums1, m, nums2, n) {
//   nums1.length = m;

//   for(let i=0;i<n;i++){
//       nums1.push(nums2[i])
//   }
//   nums1.sort((a,b)=>a-b)
//   return nums1
// };
// ======================================================================================
// Q 83 Defanging an LP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

//Brute Approach
function defangIPaddr(address) {
  let add = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] === ".") {
      add += "[.]";
    } else {
      add += address[i];
    }
  }
  return add;
}
console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));

//Better Approach
function defangIPaddr(address) {
  return address.replaceAll(".", "[.]");
}
console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));

function defangIPaddr(address) {
  return address.split(".").join("[.]");
}
console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));

// =====================================================================================
// Q 84 jewls and stone
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

function numJewelsInStones(jewels, stones) {
  let count = 0;
  for (let jewel of jewels) {
    for (let stone of stones) {
      if (jewel == stone) {
        count++;
      }
    }
  }
  return count;
}
console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
console.log(numJewelsInStones("adb", "bbb"));

//Optimal Approach
function numJewelsInStones(jewels, stones) {
  let setOfjewels = new Set(jewels);
  let totoalCount = 0;

  for (let rock of stones) {
    if (setOfjewels.has(rock)) {
      totoalCount++;
    }
  }
  return totoalCount;
}
console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
// ====================================================================================
// Q  85 Shuffle the Array
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Example 1:

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
// Example 2:

// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]
// Example 3:

// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]

//Brute Approach
function Shuffle(nums, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }
  return result;
}
console.log(Shuffle([2, 5, 1, 3, 4, 7], 3));
console.log(Shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));
console.log(Shuffle([1, 1, 2, 2], 2));
// =====================================================================================
// Q 86 Richest customer wealth
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.
// Example 2:

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation:
// 1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.
// Example 3:

// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17

//Better Approach
function maximunWealth(accounts) {
  let richest = accounts.map((elm) => elm.reduce((acc, curr) => acc + curr, 0));
  return Math.max(...richest);
}
console.log(
  maximunWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
console.log(
  maximunWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
console.log(
  maximunWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);

function maximunWealth(accounts) {
  let richest = 0;

  for (let i = 0; i < accounts.length; i++) {
    // console.log(accounts[i])
    let customerWealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      customerWealth += accounts[i][j];
      // console.log(customerWealth,accounts[i][j])
      richest = Math.max(customerWealth, richest);
    }
  }
  return richest;
}
console.log(
  maximunWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
console.log(
  maximunWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
console.log(
  maximunWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
// =======================================================================================
// Q 87 Find first and last position of Element in sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
// Brute Approach
function findTheTargetIndex(nums, target) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result.push(i);
    }
  }
  return result;
}
console.log(findTheTargetIndex([1, 2, 5, 2, 3], 2));
console.log(findTheTargetIndex([1, 2, 5, 2, 3], 3));
console.log(findTheTargetIndex([1, 2, 5, 2, 3], 5));

function findTheTargetIndex(nums, target) {
  let result = [];

  const sortedArray = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (sortedArray[i] == target) {
      result.push(i);
    }
  }

  return result;
}
console.log(findTheTargetIndex([1, 2, 5, 2, 3], 2));
console.log(findTheTargetIndex([1, 2, 5, 2, 3], 3));
console.log(findTheTargetIndex([1, 2, 5, 2, 3], 5));
// =======================================================================================

// Q 87 Count the pair whose sum less then the Target.
// Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

// Example 1:

// Input: nums = [-1,1,2,3,1], target = 2
// Output: 3
// Explanation: There are 3 pairs of indices that satisfy the conditions in the statement:
// - (0, 1) since 0 < 1 and nums[0] + nums[1] = 0 < target
// - (0, 2) since 0 < 2 and nums[0] + nums[2] = 1 < target
// - (0, 4) since 0 < 4 and nums[0] + nums[4] = 0 < target
// Note that (0, 3) is not counted since nums[0] + nums[3] is not strictly less than the target.
// Example 2:

// Input: nums = [-6,2,5,-2,-7,-1,3], target = -2
// Output: 10
// Explanation: There are 10 pairs of indices that satisfy the conditions in the statement:
// - (0, 1) since 0 < 1 and nums[0] + nums[1] = -4 < target
// - (0, 3) since 0 < 3 and nums[0] + nums[3] = -8 < target
// - (0, 4) since 0 < 4 and nums[0] + nums[4] = -13 < target
// - (0, 5) since 0 < 5 and nums[0] + nums[5] = -7 < target
// - (0, 6) since 0 < 6 and nums[0] + nums[6] = -3 < target
// - (1, 4) since 1 < 4 and nums[1] + nums[4] = -5 < target
// - (3, 4) since 3 < 4 and nums[3] + nums[4] = -9 < target
// - (3, 5) since 3 < 5 and nums[3] + nums[5] = -3 < target
// - (4, 5) since 4 < 5 and nums[4] + nums[5] = -8 < target
// - (4, 6) since 4 < 6 and nums[4] + nums[6] = -4 < target

//Brute Approach
function countPairs(nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) count++;
    }
  }
  return count;
}
console.log(countPairs([-1, 1, 2, 3, 1], 2));
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2));

// Optimal Approach
function countPairs(nums, target) {
  nums.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }
  return count;
}
console.log(countPairs([-1, 1, 2, 3, 1], 2));
console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2));
// ============================================================================
// Q 87 Smallest Eevn number
// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

// Example 1:

// Input: n = 5
// Output: 10
// Explanation: The smallest multiple of both 5 and 2 is 10.
// Example 2:

// Input: n = 6
// Output: 6
// Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.

function findSmallestEven(n) {
  return n % 2 === 0 ? n : n * 2;
}
console.log(findSmallestEven(5));
console.log(findSmallestEven(6));
// =======================================================================================
function countFairPairs(nums, lower, uper) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] <= uper && lower <= nums[i] + nums[j]) count++;
    }
  }
  return count;
}
console.log(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6));
console.log(countFairPairs([1, 7, 9, 2, 5], 11, 11));
// =========================================================================================
// Count Array pairs Divisible by k
// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) such that:

// 0 <= i < j <= n - 1 and
// nums[i] * nums[j] is divisible by k.

// Example 1:

// Input: nums = [1,2,3,4,5], k = 2
// Output: 7
// Explanation:
// The 7 pairs of indices whose corresponding products are divisible by 2 are
// (0, 1), (0, 3), (1, 2), (1, 3), (1, 4), (2, 3), and (3, 4).
// Their products are 2, 4, 6, 8, 10, 12, and 20 respectively.
// Other pairs such as (0, 2) and (2, 4) have products 3 and 15 respectively, which are not divisible by 2.
// Example 2:

// Input: nums = [1,2,3,4], k = 5
// Output: 0
// Explanation: There does not exist any pair of indices whose corresponding product is divisible by 5.
//Brute Approach
function countPairsDivisideByK(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] * nums[j]) % k === 0) count++;
    }
  }
  return count;
}
console.log(countPairsDivisideByK([1, 2, 3, 4, 5], 2));
console.log(countPairsDivisideByK([1, 2, 3, 4], 5));
// =====================================================================================
// pending
function cannAverage(nums, k) {
  n = nums.length;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if ((temp + nums[j]) % k === 0) count++;
    }
  }
  return count === n / 2;
}
console.log(cannAverage([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5)); //true
console.log(cannAverage([1, 2, 3, 4, 5, 6], 7)); //true
console.log(cannAverage([1, 2, 3, 4, 5, 6], 10)); //false
// =======================================================================================
// Q XOR Operations in an Array
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
function XOROperations(n, start) {
  let XOR = 0;
  for (let i = 0; i < n; i++) {
    XOR ^= start + 2 * i;
  }
  return XOR;
}
console.log(XOROperations(5, 0));
console.log(XOROperations(4, 3));
// =======================================================================================

// Q Number of the 1 Bits
// Write a function that takes the binary representation of a positive integer and returns the number of
// set bits
//  it has (also known as the Hamming weight).

// Example 1:

// Input: n = 11

// Output: 3

// Explanation:

// The input binary string 1011 has a total of three set bits.

// Example 2:

// Input: n = 128

// Output: 1

// Explanation:

// The input binary string 10000000 has a total of one set bit.

// Example 3:

// Input: n = 2147483645

// Output: 30

// Explanation:

// The input binary string 1111111111111111111111111111101 has a total of thirty set bits.
//Brute approach
function hammingWeight(n) {
  let binary = n.toString(2);
  let count = 0;
  for (let num of binary) {
    if (num != 0) {
      count++;
    }
  }
  return count;
}
console.log(hammingWeight(11));
console.log(hammingWeight(128));
console.log(hammingWeight(2147483645));
//Brute Approach
function hammingWeight(n) {
  return n.toString(2).split("0").join("").length;
}
console.log(hammingWeight(11));
console.log(hammingWeight(128));
console.log(hammingWeight(2147483645));

//optimal Approach
function hammingWeight(nums) {
  let count = 0;
  while (nums > 0) {
    let x = nums % 2;
    nums = nums - x;
    nums /= 2;
    if (x === 1) count += 1;
  }
  return count;
}
console.log(hammingWeight(11));
console.log(hammingWeight(128));
console.log(hammingWeight(2147483645));
//=======================================================================================
// Q counting Bits
// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// function countingBits(n) {
//   let result = [];
//   for (let i = 0; i <= n; i++) {
//     result.push(i.toString(2).split("0").join("").length);
//   }
//   return result;
// }
// console.log(countingBits(2));
// console.log(countingBits(5));
//0---->  //0
// 1---->1//1
//2----->10//1function countingBits(n) {
function countingBits(n) {
  let dp = new Array(n + 1).fill(0);
  offset = 1;

  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 == i) offset = i;
    dp[i] = 1 + dp[i - offset];
  }

  return dp;
}

console.log(countingBits(2)); // [0, 1, 1]
console.log(countingBits(5)); // [0, 1, 1, 2, 1, 2]
// ====================================================================================
// Q decode XORed Array
// There is a hidden integer array arr that consists of n non-negative integers.

// It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].

// You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].

// Return the original array arr. It can be proved that the answer exists and is unique.

// Example 1:

// Input: encoded = [1,2,3], first = 1
// Output: [1,0,2,1]
// Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]
// Example 2:

// Input: encoded = [6,2,7,3], first = 4
// Output: [4,2,0,7,4]
//Brute Approach
function deCode(encoded, first) {
  let res = [first];
  for (let i = 0; i < encoded.length; i++) {
    res.push(res[i] ^ encoded[i]);
  }
  return res;
}
console.log(deCode([1, 2, 3], 1)); //[1,0,2,1]
console.log(deCode([6, 2, 7, 3], 4));

//Better Approach
function deCode(encoded, first) {
  let res = [first];
  encoded.forEach((val, i) => res.push(res[i] ^ val));
  return res;
}
console.log(deCode([1, 2, 3], 1)); //[1,0,2,1]
console.log(deCode([6, 2, 7, 3], 4));
// =============================================================================
// Q find the original array of prefix XOR
// You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:

// pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
// Note that ^ denotes the bitwise-xor operation.

// It can be proven that the answer is unique.

// Example 1:

// Input: pref = [5,2,0,3,1]
// Output: [5,7,2,3,2]
// Explanation: From the array [5,7,2,3,2] we have the following:
// - pref[0] = 5.
// - pref[1] = 5 ^ 7 = 2.
// - pref[2] = 5 ^ 7 ^ 2 = 0.
// - pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3.
// - pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.
// Example 2:

// Input: pref = [13]
// Output: [13]
// Explanation: We have pref[0] = arr[0] = 13.
//brute Approach
function findArray(pref) {
  let n = pref.length;
  let arr = new Array(n);
  arr[0] = pref[0];
  for (let i = 1; i < n; i++) {
    arr[i] = pref[i] ^ pref[i - 1];
  }
  return arr;
}
console.log(findArray([5, 2, 0, 3, 1]));
console.log(findArray([13]));

var findArray = function (pref) {
  return pref.map((val, idx) => {
    if (idx === 0) {
      return val;
    } else {
      return val ^ pref[idx - 1];
    }
  });
};
console.log(findArray([5, 2, 0, 3, 1]));
console.log(findArray([13]));
// ======================================================================================
// Q candy
// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

// Example 1:

// Input: ratings = [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
// Example 2:

// Input: ratings = [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
// The third child gets 1 candy because it satisfies the above two conditions.

//Brute Approach
function candy(ratings) {
  let n = ratings.length;
  let candies = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }
  return candies.reduce((sum, candy) => sum + candy, 0);
}
console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 2]));
// =====================================================================================
// Prefix and suffix Question
// Q. 1.Longet Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//optimal Approach
function findLongetPrefix(strs) {
  if (strs.length === 1) return strs[0];
  if (strs.length === 0) return "";

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}
console.log(findLongetPrefix(["flower", "flow", "flight"]));
console.log(findLongetPrefix(["dog", "racecar", "car"]));
//Time complexity:O(n*m)

function findLongetPrefix(strs) {
  if (strs.length === 1) return strs[0];
  let prefix = " ";
  let first = strs[0];
  strs.sort();
  let last = strs[strs.length - 1];
  for (let i = 0; i < first.length; i++) {
    if (last[i] !== first[i]) return prefix;
    prefix = prefix + first[i];
  }
  return prefix;
}
console.log(findLongetPrefix(["flower", "flow", "flight"]));
console.log(findLongetPrefix(["dog", "racecar", "car"]));
// Time complexity:O(n* m log n)
// ======================================================================================
// Q 2 Next gerater Element |
// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

function nextGreaterElement(nums1, nums2) {
  let res = new Array(nums1.length).fill(-1);
  for (let i = 0; i < nums1.length; i++) {
    let found = false;
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        found = true;
      }
      if (found && nums2[j] > nums1[i]) {
        res[i] = nums2[j];
        break;
      }
    }
  }
  return res;
}
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
// Tc-O(n*m)

function nextGreaterElement(nums1, nums2) {
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; j++) {
      if (nums1[i] < nums2[j]) {
        ans.push(nums2[j]);
        break;
      }
    }

    if (ans[i] == null) {
      ans.push(-1);
    }
  }
  return ans;
}
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
// Tc-O(n*m)

// ================================================================================
// Q A Number After a Double reversal.
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

//Brute Approach
function check(num) {
  let reversed1 = Number(num.toString().split("").reverse().join(""));
  let reversed2 = Number(reversed1.toString().split("").reverse().join(""));
  return reversed2 == num;
}
console.log(check(526));
console.log(check(1800));
console.log(check(0));

//Better Approach
function check(num) {
  if (num % 10 || num == 0) {
    return true;
  }
  return false;
}
console.log(check(526));
console.log(check(1800));
console.log(check(0));
// ========================================================================================
// Q Valid Boomrange
// Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.

// A boomerang is a set of three points that are all distinct and not in a straight line.

// Example 1:

// Input: points = [[1,1],[2,3],[3,2]]
// Output: true
// Example 2:

// Input: points = [[1,1],[2,2],[3,3]]
// Output: false
function isBoomerange(points) {
  return (
    (points[1][1] - points[0][1]) * (points[2][0] - points[0][0]) !==
    (points[2][1] - points[0][1]) * (points[1][0] - points[0][0])
  );
}
console.log(
  isBoomerange([
    [1, 1],
    [2, 3],
    [3, 2],
  ])
);
console.log(
  isBoomerange([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
);
function isBoomerange(points) {
  const [[x1, y1], [x2, y2], [x3, y3]] = points;
  return !!(y1 * (x2 - x3) + y2 * (x3 - x1) + y3 * (x1 - x2));
}
console.log(
  isBoomerange([
    [1, 1],
    [2, 3],
    [3, 2],
  ])
);
console.log(
  isBoomerange([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
);
// ====================================================================================
// Q peak index in a mountain Array
// You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

// Return the index of the peak element.

// Your task is to solve it in O(log(n)) time complexity.

// Example 1:

// Input: arr = [0,1,0]

// Output: 1

// Example 2:

// Input: arr = [0,2,1,0]

// Output: 1

// Example 3:

// Input: arr = [0,10,5,2]

// Output: 1

//Brute Approach
function findPeakIndex(arr) {
  if (arr.length < 3) return -1;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return i;
    }
  }
  return -1;
}
console.log(findPeakIndex([0, 1, 0]));
console.log(findPeakIndex([0, 2, 1, 0]));
console.log(findPeakIndex([0, 10, 5, 2]));

//optimal Approach
function findPeakIndex(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[mid + 1]) {
      // Peak is on the right side
      left = mid + 1;
    } else {
      // Peak is on the left side (including mid)
      right = mid;
    }
  }

  // When left equals right, we found the peak index
  return left;
}
console.log(findPeakIndex([0, 1, 0]));
console.log(findPeakIndex([0, 2, 1, 0]));
console.log(findPeakIndex([0, 10, 5, 2]));
// =======================================================================================
// Q Valid Moutanic Array
// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Example 1:

// Input: arr = [2,1]
// Output: false
// Example 2:

// Input: arr = [3,5,5]
// Output: false
// Example 3:

// Input: arr = [0,3,2,1]
// Output: true
function isMountainceArray(arr) {
  let startOfVally = 0;
  if (arr.length <= 2) return false;
  if (arr[1] < arr[0]) return false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) return false;
    if (arr[i - 1] > arr[i]) {
      startOfVally = i - 1;
      break;
    }
  }
  for (let i = startOfVally; i < arr.length - 1; i++) {
    if (arr[i + 1] >= arr[i]) return false;
  }
  return true;
}
console.log(isMountainceArray([2, 1]));
console.log(isMountainceArray([3, 5, 5]));
console.log(isMountainceArray([0, 3, 2, 1]));
// Time complexity:- O(n)

function isMountainceArray(arr) {
  let uniqueArr = [...new Set(arr)];
  let index;
  let max = uniqueArr[0];
  for (let i = 0; i < uniqueArr.length; i++) {
    if (uniqueArr[i] > max) {
      max = uniqueArr[i];
    }
  }
  leftElm = uniqueArr.slice(0, uniqueArr.indexOf(max)).length;
  rightElm = uniqueArr.slice(uniqueArr.indexOf(max) + 1).length;
  if (leftElm > 0 && rightElm > 0) {
    return true;
  }
  return false;
}

console.log(isMountainceArray([2, 1]));
console.log(isMountainceArray([3, 5, 5]));
console.log(isMountainceArray([0, 3, 2, 1]));
// Time complexity:- O(n)

// ===============================================================================
// // Q Find minimum Operations to make all Element divisibel by three
// You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

// Return the minimum number of operations to make all elements of nums divisible by 3.

// Example 1:

// Input: nums = [1,2,3,4]

// Output: 3

// Explanation:

// All array elements can be made divisible by 3 using 3 operations:

// Subtract 1 from 1.
// Add 1 to 2.
// Subtract 1 from 4.
// Example 2:

// Input: nums = [3,6,9]

// Output: 0

//Brute Approach
function minimumOperations(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 !== 0) {
      count++;
    }
  }
  return count;
}
console.log(minimumOperations([1, 2, 3, 4]));
console.log(minimumOperations([3, 6, 9]));

//Better Approach
function minimumOperations(nums) {
  return nums.filter((elm) => elm % 3 !== 0).length;
}
console.log(minimumOperations([1, 2, 3, 4]));
console.log(minimumOperations([3, 6, 9]));
// ======================================================================================
//  Q. Find the peaks
// You are given a 0-indexed array mountain. Your task is to find all the peaks in the mountain array.

// Return an array that consists of indices of peaks in the given array in any order.

// Notes:

// A peak is defined as an element that is strictly greater than its neighboring elements.
// The first and last elements of the array are not a peak.

// Example 1:

// Input: mountain = [2,4,4]
// Output: []
// Explanation: mountain[0] and mountain[2] can not be a peak because they are first and last elements of the array.
// mountain[1] also can not be a peak because it is not strictly greater than mountain[2].
// So the answer is [].
// Example 2:

// Input: mountain = [1,4,3,8,5]
// Output: [1,3]
// Explanation: mountain[0] and mountain[4] can not be a peak because they are first and last elements of the array.
// mountain[2] also can not be a peak because it is not strictly greater than mountain[3] and mountain[1].
// But mountain [1] and mountain[3] are strictly greater than their neighboring elements.
// So the answer is [1,3].
//Brute Approach
function findThePeaks(mountain) {
  let peaks = [];
  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i - 1] < mountain[i] && mountain[i + 1] < mountain[i]) {
      peaks.push(i);
    }
  }
  return peaks;
}
console.log(findThePeaks([2, 4, 4])); //[]
console.log(findThePeaks([1, 4, 3, 8, 5])); //[1,3]
// ======================================================================================
// Q Number of the Arithmetic Triplets

// You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

// i < j < k,
// nums[j] - nums[i] == diff, and
// nums[k] - nums[j] == diff.
// Return the number of unique arithmetic triplets.

// Example 1:

// Input: nums = [0,1,4,6,7,10], diff = 3
// Output: 2
// Explanation:
// (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
// (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3.
// Example 2:

// Input: nums = [4,5,6,7,8,9], diff = 2
// Output: 2
// Explanation:
// (0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
// (1, 3, 5) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.

//Brute Approach
function arithmeticTriplets(nums, diff) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
          count++;
        }
      }
    }
  }
  return count;
}
console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2));

//Optimal Approach
function arithmeticTriplets(nums, diff) {
  let count = 0;
  let set = new Set(nums);

  for (let num of nums) {
    if (set.has(num + diff) && set.has(num + 2 * diff)) {
      count++;
    }
  }
  return count;
}
console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2));
// ======================================================================================
// Q Sort the color
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

function sortTheColor(nums) {
  let n = nums.length;
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) count0++;
    else if (nums[i] === 1) count1++;
    else if (nums[i] === 2) count2++;
  }
  for (let i = 0; i < count0; i++) nums[i] = 0;
  for (let i = count0; i < count0 + count1; i++) nums[i] = 1;
  for (let i = count1 + count2; i < n; i++) nums[i] = 2;

  return nums;
}
console.log(sortTheColor([2, 0, 2, 1, 1, 0]));
console.log(sortTheColor([2, 0, 1]));

//Optimal  Approach
function sortTheColor(nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }

  return nums;
}

console.log(sortTheColor([2, 0, 2, 1, 1, 0])); // Output: [0, 0, 1, 1, 2, 2]
console.log(sortTheColor([2, 0, 1])); // Output: [0, 1, 2]
// ===================================================================================
// //Q
// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

// Example 1:

// Input: s = "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
// Example 2:

// Input: s = "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation:
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
// Example 3:

// Input: s = "()()"
// Output: ""
// Explanation:
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".

function removeOutMostParantheses(s) {
  let result = "";
  let ticker = 0;
  for (let el of s) {
    el == "(" ? ticker++ : 0;
    ticker > 1 ? (result += el) : 0;
    el == ")" ? ticker-- : 0;
  }
  return result;
}

console.log(removeOutMostParantheses("(()())(())"));
console.log(removeOutMostParantheses("(()())(())(()(()))"));
console.log(removeOutMostParantheses("()()"));
function removeOutMostParantheses(s) {
  let ans = "";
  let count = 0;
  for (let c of s) {
    if (c == "(") {
      if (count) ans += c;
      count++;
    } else {
      count--;
      if (count) ans += c;
    }
  }
  return ans;
}

console.log(removeOutMostParantheses("(()())(())"));
console.log(removeOutMostParantheses("(()())(())(()(()))"));
console.log(removeOutMostParantheses("()()"));
// ====================================================================================
// Q Largest odd number in string
// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.

function largestOddNum(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 !== 0) {
      return num.slice(0, i + 1);
    }
  }
  return "";
}
console.log(largestOddNum("52"));
console.log(largestOddNum("4206"));
console.log(largestOddNum("35427"));
// ========================================================================================
//Q Largest three-same-digits-number in string
// You are given a string num representing a large integer. An integer is good if it meets the following conditions:

// It is a substring of num with length 3.
// It consists of only one unique digit.
// Return the maximum good integer as a string or an empty string "" if no such integer exists.

// Note:

// A substring is a contiguous sequence of characters within a string.
// There may be leading zeroes in num or a good integer.

// Example 1:

// Input: num = "6777133339"
// Output: "777"
// Explanation: There are two distinct good integers: "777" and "333".
// "777" is the largest, so we return "777".
// Example 2:

// Input: num = "2300019"
// Output: "000"
// Explanation: "000" is the only good integer.
// Example 3:

// Input: num = "42352338"
// Output: ""
// Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.

//Brute Approach
function largestGoodIntegers(num) {
  let result = new Set();
  for (let i = 1; i < num.length - 1; i++) {
    if (num[i - 1] === num[i] && num[i] === num[i + 1]) {
      result.add(num[i].repeat(3));
    }
  }
  uniqueArr = [...result];
  return uniqueArr.length === 0 ? "" : uniqueArr.sort().at(-1);
}
console.log(largestGoodIntegers("6777133339"));
console.log(largestGoodIntegers("2300019"));
console.log(largestGoodIntegers("42352338"));
//time complexity :-O(n log n)

//Optimal
function largestGoodIntegers(num) {
  let result = -1;
  for (let i = 0; i + 2 < num.length; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      result = Math.max(result, parseInt(num[i]));
    }
  }
  return result === -1 ? "" : String(result).repeat(3);
}

console.log(largestGoodIntegers("6777133339"));
console.log(largestGoodIntegers("2300019"));
console.log(largestGoodIntegers("42352338"));
//Time complexity:-O(n)

// ======================================================================================
// Q Premutation Difference between Two String
// You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.

// The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.

// Return the permutation difference between s and t.

// Example 1:

// Input: s = "abc", t = "bac"

// Output: 2

// Explanation:

// For s = "abc" and t = "bac", the permutation difference of s and t is equal to the sum of:

// The absolute difference between the index of the occurrence of "a" in s and the index of the occurrence of "a" in t.
// The absolute difference between the index of the occurrence of "b" in s and the index of the occurrence of "b" in t.
// The absolute difference between the index of the occurrence of "c" in s and the index of the occurrence of "c" in t.
// That is, the permutation difference between s and t is equal to |0 - 1| + |1 - 0| + |2 - 2| = 2.

// Example 2:

// Input: s = "abcde", t = "edbac"

// Output: 12

// Explanation: The permutation difference between s and t is equal to |0 - 3| + |1 - 2| + |2 - 4| + |3 - 1| + |4 - 0| = 12.

//Brute Approach
function premutationDiff(s, t) {
  let diff = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j]) diff += Math.abs(i - j);
    }
  }
}
console.log(premutationDiff("abc", "bac"));
console.log(premutationDiff("abcde", "edbac"));

//Optimal Approach
function premutationDiff(s, t) {
  let indexMap = {};
  for (let i = 0; i < t.length; i++) {
    indexMap[t[i]] = i;
  }
  let diff = 0;
  for (let i = 0; i < s.length; i++) {
    diff += Math.abs(i - indexMap[s[i]]);
  }
  return diff;
}
console.log(premutationDiff("abc", "bac"));
console.log(premutationDiff("abcde", "edbac"));
// ========================================================================================
// Q Striclty paliandrom number
// An integer n is strictly palindromic if, for every base b between 2 and n - 2 (inclusive), the string representation of the integer n in base b is palindromic.

// Given an integer n, return true if n is strictly palindromic and false otherwise.

// A string is palindromic if it reads the same forward and backward.

// Example 1:

// Input: n = 9
// Output: false
// Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
// In base 3: 9 = 100 (base 3), which is not palindromic.
// Therefore, 9 is not strictly palindromic so we return false.
// Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.
// Example 2:

// Input: n = 4
// Output: false
// Explanation: We only consider base 2: 4 = 100 (base 2), which is not palindromic.
// Therefore, we return false.

function isStriclyPalindrom(n) {
  function isPalindrom(str) {
    return str === str.split("").reverse().join("");
  }

  for (let i = 2; i <= n - 2; i++) {
    let isBase = n.toString(i);
    if (!isPalindrom(isBase)) return false;
  }
  return true;
}
console.log(isStriclyPalindrom(9));
console.log(isStriclyPalindrom(4));
// ====================================================================================

// // Q Number of the good pair
// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
//Brute  Approach
function countGoodPair(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }
  return count;
}
console.log(countGoodPair([1, 2, 3, 1, 1, 3]));
console.log(countGoodPair([1, 1, 1, 1]));
console.log(countGoodPair([1, 2, 3]));
//Time  complexity:-O(n**2)

//Optimal Approach
function countGoodPair(nums) {
  let count = 0;
  let map = new Map();
  for (let elm of nums) {
    if (map.has(elm)) {
      count += map.get(elm);
      map.set(elm, map.get(elm) + 1);
    } else {
      map.set(elm, 1);
    }
  }
  return count;
}
console.log(countGoodPair([1, 2, 3, 1, 1, 3]));
console.log(countGoodPair([1, 1, 1, 1]));
console.log(countGoodPair([1, 2, 3]));
//Time  complexity:-O(n)

// ========================================================================================
// Q Count nice pair in the array

// You are given an array nums that consists of non-negative integers. Let us define rev(x) as the reverse of the non-negative integer x. For example, rev(123) = 321, and rev(120) = 21. A pair of indices (i, j) is nice if it satisfies all of the following conditions:

// 0 <= i < j < nums.length
// nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
// Return the number of nice pairs of indices. Since that number can be too large, return it modulo 109 + 7.

// Example 1:

// Input: nums = [42,11,1,97]
// Output: 2
// Explanation: The two pairs are:
//  - (0,3) : 42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121.
//  - (1,2) : 11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12.
// Example 2:

// Input: nums = [13,10,35,24,76]
// Output: 4

//Brute Approach
function countNicePair(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (
        nums[i] + Number(String(nums[j]).split("").reverse().join("")) ===
        nums[j] + Number(String(nums[i]).split("").reverse().join(""))
      ) {
        count++;
      }
    }
  }
  return count;
}
console.log(countNicePair([42, 11, 1, 97]));
console.log(countNicePair([13, 10, 35, 24, 76]));

//Optimal Approach
function rev(x) {
  return parseInt(x.toString().split("").reverse().join("")) || 0;
}
function countNicePair(nums) {
  let map = new Map();
  let mod = 1_000_000_007;
  let count = 0;
  for (let num of nums) {
    value = num - rev(num);
    if (map.has(value)) {
      count = (count + map.get(value)) % mod;
      map.set(value, map.get(value) + 1);
    } else {
      map.set(value, 1);
    }
  }
  return count;
}
console.log(countNicePair([42, 11, 1, 97]));
console.log(countNicePair([13, 10, 35, 24, 76]));
// ======================================================================================
// Q Count the number of Bad Pair
// You are given a 0-indexed integer array nums. A pair of indices (i, j) is a bad pair if i < j and j - i != nums[j] - nums[i].

// Return the total number of bad pairs in nums.

// Example 1:

// Input: nums = [4,1,3,3]
// Output: 5
// Explanation: The pair (0, 1) is a bad pair since 1 - 0 != 1 - 4.
// The pair (0, 2) is a bad pair since 2 - 0 != 3 - 4, 2 != -1.
// The pair (0, 3) is a bad pair since 3 - 0 != 3 - 4, 3 != -1.
// The pair (1, 2) is a bad pair since 2 - 1 != 3 - 1, 1 != 2.
// The pair (2, 3) is a bad pair since 3 - 2 != 3 - 3, 1 != 0.
// There are a total of 5 bad pairs, so we return 5.
// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: 0
// Explanation: There are no bad pairs.
//Brute Approach
function countBadPairs(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (j - i != nums[j] - nums[i]) {
        count++;
      }
    }
  }
  return count;
}
console.log(countBadPairs([4, 1, 3, 3]));
console.log(countBadPairs([1, 2, 3, 4, 5]));

//Optimal Approach
function countBadPairs(nums) {
  let n = nums.length;
  let map = new Map();
  nums.forEach((e, i) => {
    if (!map.has(e - i)) map.set(e - i, 0);
    map.set(e - i, map.get(e - i) + 1);
  });
  return (
    (n * (n - 1)) / 2 -
    [...map.values()].reduce((acc, b) => acc + (b * (b - 1)) / 2, 0)
  );
}
console.log(countBadPairs([4, 1, 3, 3]));
console.log(countBadPairs([1, 2, 3, 4, 5]));
// =====================================================================================
//Pending
// Q K-diff pair in the array
// Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

// A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

// 0 <= i, j < nums.length
// i != j
// |nums[i] - nums[j]| == k
// Notice that |val| denotes the absolute value of val.

// Example 1:

// Input: nums = [3,1,4,1,5], k = 2
// Output: 2
// Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
// Although we have two 1s in the input, we should only return the number of unique pairs.
// Example 2:

// Input: nums = [1,2,3,4,5], k = 1
// Output: 4
// Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
// Example 3:

// Input: nums = [1,3,1,5,4], k = 0
// Output: 1
// Explanation: There is one 0-diff pair in the array, (1, 1).
// function findPairs(nums, k) {
//   let uniqueElm = [];
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (Math.abs(nums[i] - nums[j]) == k) {
//         res.push([nums[i], nums[j]]);
//       }
//     }
//   }
//  return
// }
// console.log(findPairs([3, 1, 4, 1, 5], 2));
// console.log(findPairs([1, 2, 3, 4, 5], 1));
// console.log(findPairs([1, 3, 1, 5, 4], 0));

// function findPairs(nums, k) {}
// console.log(findPairs([3, 1, 4, 1, 5], 2));
// console.log(findPairs([1, 2, 3, 4, 5], 1));
// console.log(findPairs([1, 3, 1, 5, 4], 0));
// // ====================================================================================
// // Q Count the equal and divisible pair in arrray
// Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.

// Example 1:

// Input: nums = [3,1,2,2,2,1,3], k = 2
// Output: 4
// Explanation:
// There are 4 pairs that meet all the requirements:
// - nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
// - nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
// - nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
// - nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.
// Example 2:

// Input: nums = [1,2,3,4], k = 1
// Output: 0
// Explanation: Since no value in nums is repeated, there are no pairs (i,j) that meet all the requirements.

function findEqualAndDivisiablePair(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && (i * j) % k === 0) {
        count++;
      }
    }
  }
  return count;
}
console.log(findEqualAndDivisiablePair([3, 1, 2, 2, 2, 1, 3], 2));
console.log(findEqualAndDivisiablePair([1, 2, 3, 4], 1));

function findEqualAndDivisiablePair(nums, k) {
  let map = new Map();
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], [i]);
    } else {
      let index = map.get(nums[i]);
      for (let num of index) {
        if ((i * num) % k === 0) {
          sum++;
        }
      }
      index.push(i);
    }
  }

  return sum;
}
console.log(findEqualAndDivisiablePair([3, 1, 2, 2, 2, 1, 3], 2));
console.log(findEqualAndDivisiablePair([1, 2, 3, 4], 1));
// ==================================================================================
// sorting problem
// Q Assign cookies
// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

// Example 1:

// Input: g = [1,2,3], s = [1,1]
// Output: 1
// Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// You need to output 1.
// Example 2:

// Input: g = [1,2], s = [1,2,3]
// Output: 2
// Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.
// You have 3 cookies and their sizes are big enough to gratify all of the children,
// You need to output 2.

function findContentChildren(g, s) {
  let contectChlid = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  for (let i = g.length - 1; i >= 0; i--) {
    if (g[i] <= s[s.length - 1]) {
      contectChlid++;
      s.pop();
    }
  }
  return contectChlid;
}
console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));

function findContentChildren(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let c = 0;
  let i = 0;

  while (i < s.length) {
    if (g[c] <= s[i]) {
      c++;
    }
    i++;
  }
  return c;
}
console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));
// ==================================================================================

// Q Maximum Gap
// Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

// You must write an algorithm that runs in linear time and uses linear extra space.

// Example 1:

// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
// Example 2:

// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.
//Brute Approach
function findMaximumGap(nums) {
  if (nums.length < 2) return 0;
  nums.sort((a, b) => a - b);

  var maxGap = 0;

  for (var i = 0; i < nums.length - 1; i++)
    maxGap = Math.max(nums[i + 1] - nums[i], maxGap);

  return maxGap;
}
console.log(findMaximumGap([3, 6, 9, 1]));
console.log(findMaximumGap([10]));
// Time complexity:O(n log n)

//Optimal Approach
function findMaximumGap(nums) {
  let max = 0;
  if (nums.length < 2) return 0;
  nums.sort((a, b) => a - b);
  nums.forEach((elm, i) => {
    if (nums[i + 1] - elm > max) {
      max = nums[i + 1] - elm;
    }
  });
  return max;
}
console.log(findMaximumGap([3, 6, 9, 1]));
console.log(findMaximumGap([10]));

// =======================================================================================
// Q Maximum product of the three number
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6

//Brute Approach
function maxProductOfThreeNum(nums) {
  //sort The Array
  let temp = nums[0];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }

  const max1 =
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];

  const max2 = nums[0] * nums[1] * nums[nums.length - 1];

  return Math.max(max1, max2);
}
console.log(maxProductOfThreeNum([1, 2, 3]));
console.log(maxProductOfThreeNum([1, 2, 3, 4]));
console.log(maxProductOfThreeNum([-1, -2, -3]));
console.log(maxProductOfThreeNum([-100, -98, -1, 2, 3, 4]));

//Better Approach
function maxProductOfThreeNum(nums) {
  //sort The Array
  nums.sort((a, b) => a - b);

  const max1 =
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];

  const max2 = nums[0] * nums[1] * nums[nums.length - 1];

  return Math.max(max1, max2);
}
console.log(maxProductOfThreeNum([1, 2, 3]));
console.log(maxProductOfThreeNum([1, 2, 3, 4]));
console.log(maxProductOfThreeNum([-1, -2, -3]));
console.log(maxProductOfThreeNum([-100, -98, -1, 2, 3, 4]));
// ==================================================================================
// Q Sort the arrray by Increasing Frequnecy

// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

// Example 1:

// Input: nums = [1,1,2,2,2,3]
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
// Example 2:

// Input: nums = [2,3,1,3,2]
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
// Example 3:

// Input: nums = [-1,1,-6,4,5,-6,1,4,1]
// Output: [5,-1,4,4,-6,-6,1,1,1]

//Brute Approach
function frequencySort(nums) {
  let frequencyMap = new Map();
  for (let n of nums) {
    frequencyMap.set(n, (frequencyMap.get(n) || 0) + 1);
  }
  return nums.sort((a, b) => {
    if (frequencyMap.get(a) === frequencyMap.get(b)) {
      return b - a;
    }
    return frequencyMap.get(a) - frequencyMap.get(b);
  });
}
console.log(frequencySort([1, 1, 2, 2, 2, 3]));
console.log(frequencySort([2, 3, 1, 3, 2]));
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]));
// Time complexity:-O(n log n)

function frequencySort(nums) {
  const obj = nums.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  return nums.sort((a, b) => {
    if (obj[a] === obj[b]) {
      return b - a;
    }
    return obj[a] - obj[b];
  });
}
console.log(frequencySort([1, 1, 2, 2, 2, 3]));
console.log(frequencySort([2, 3, 1, 3, 2]));
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]));
// Time complexity:-O(n log n)

// =======================================================================================

// Q  Top k frequnet Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

function topKFrequncy(nums, k) {
  let frequencyMap = new Map();
  for (let elm of nums) {
    frequencyMap.set(elm, (frequencyMap.get(elm) || 0) + 1);
  }
  sortedArr = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]);

  return sortedArr.slice(0, k).map(([num]) => num);
}
console.log(topKFrequncy([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequncy([1], 1));
//Time complexity:-O(n +m log m +k)

// =====================================================================================
// Q Most frequncy even Element
// Given an integer array nums, return the most frequent even element.

// If there is a tie, return the smallest one. If there is no such element, return -1.

// Example 1:

// Input: nums = [0,1,2,2,4,4,1]
// Output: 2
// Explanation:
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.
// Example 2:

// Input: nums = [4,4,4,9,2,4]
// Output: 4
// Explanation: 4 is the even element appears the most.
// Example 3:

// Input: nums = [29,47,21,41,13,37,25,7]
// Output: -1
// Explanation: There is no even element.
//Brute Approach
function mostFrquncyEven(nums) {
  let frequencyMap = new Map();
  for (let elm of nums) {
    if (elm % 2 === 0) {
      frequencyMap.set(elm, (frequencyMap.get(elm) || 0) + 1);
    }
  }
  let maxFrequncy = 0;
  let res = -1;
  for (let [num, freq] of frequencyMap.entries()) {
    if (freq > maxFrequncy || (freq === maxFrequncy && num < res)) {
      maxFrequncy = freq;
      res = num;
    }
  }
  return res;
}
console.log(mostFrquncyEven([0, 1, 2, 2, 4, 4, 1]));
console.log(mostFrquncyEven([4, 4, 4, 9, 2, 4]));
console.log(mostFrquncyEven([29, 47, 21, 41, 13, 37, 25, 7]));
// Time complexity:-O(n)

//Optimal Approach
function mostFrquncyEven(nums) {
  let frequencyMap = new Map();
  let maxFrequncy = 0;
  let res = -1;
  for (let elm of nums) {
    if (elm % 2 === 0) {
      frequencyMap[elm] = (frequencyMap[elm] || 0) + 1;

      if (frequencyMap[elm] > maxFrequncy) {
        maxFrequncy = frequencyMap[elm];
        res = elm;
      } else if (frequencyMap[elm] === maxFrequncy && elm < res) {
        res = elm;
      }
    }
  }

  return res;
}
console.log(mostFrquncyEven([0, 1, 2, 2, 4, 4, 1]));
console.log(mostFrquncyEven([4, 4, 4, 9, 2, 4]));
console.log(mostFrquncyEven([29, 47, 21, 41, 13, 37, 25, 7]));
// Time complexity
// ======================================================================================
// Q Sort Characters by Frequncy
// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

function sortChar(s) {
  let charFreq = new Map();
  for (let char of s) {
    charFreq.set(char, (charFreq.get(char) || 0) + 1);
  }
  let sortedArr = Array.from(charFreq.entries()).sort((a, b) => {
    if (b[1] === a[1]) {
      return s.indexOf(a[0]) - s.indexOf(b[0]);
    }
    return b[1] - a[1];
  });
  let res = " ";
  for (let [char, freq] of sortedArr) {
    res += char.repeat(freq);
  }
  return res;
}
console.log(sortChar("tree"));
console.log(sortChar("cccaaa"));
console.log(sortChar("Aabb"));

function sortChar(s) {
  let map = new Map();
  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  let arr = [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .map((c) => c[0].repeat(c[1]))
    .join("");
  return arr;
}
console.log(sortChar("tree"));
console.log(sortChar("cccaaa"));
console.log(sortChar("Aabb"));
// Time complexity:-O(n)
// =======================================================================================
// Q Maximum number of pair in array
// You are given a 0-indexed integer array nums. In one operation, you may do the following:

// Choose two integers in nums that are equal.
// Remove both integers from nums, forming a pair.
// The operation is done on nums as many times as possible.

// Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

// Example 1:

// Input: nums = [1,3,2,1,3,2,2]
// Output: [3,1]
// Explanation:
// Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
// Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
// Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
// No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.
// Example 2:

// Input: nums = [1,1]
// Output: [1,0]
// Explanation: Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [].
// No more pairs can be formed. A total of 1 pair has been formed, and there are 0 numbers leftover in nums.
// Example 3:

// Input: nums = [0]
// Output: [0,1]
// Explanation: No pairs can be formed, and there is 1 number leftover in nums.

//Brute  Approach
function numberOfPair(nums) {
  let map = {};
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      delete map[nums[i]];
      count++;
    } else {
      map[nums[i]] = 1;
    }
  }
  return [count, Object.values(map).length];
}
console.log(numberOfPair([1, 3, 2, 1, 3, 2, 2]));
console.log(numberOfPair([1, 1]));
console.log(numberOfPair([0]));

// Time copmlexity:O(n)

//Better Approach
function numberOfPair(nums) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let pair = 0;
  let leftOver = 0;
  for (let count of map.values()) {
    pair += Math.floor(count / 2);
    leftOver += count % 2;
  }
  return [pair, leftOver];
}
console.log(numberOfPair([1, 3, 2, 1, 3, 2, 2]));
console.log(numberOfPair([1, 1]));
console.log(numberOfPair([0]));
// Time complexity:O(n)
// =====================================================================================
// 3 sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

//Brute Approach
function ThreeSum(nums) {
  let res = new Set();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          triplet = [nums[i], nums[j], nums[k]]
            .sort((a, b) => a - b)
            .toString();
          res.add(triplet);
        }
      }
    }
  }
  return Array.from(res).map((triplet) => triplet.split(",").map(Number));
}
console.log(ThreeSum([-1, 0, 1, 2, -1, -4]));
console.log(ThreeSum([0, 1, 1]));
console.log(ThreeSum([0, 0, 0]));
// Time complexity:-O(n**2)
function ThreeSum(nums) {
  let res = new Set();
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b).toString();
        res.add(triplet);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      }
    }
  }
  return Array.from(res).map((triplet) => triplet.split(",").map(Number));
}
console.log(ThreeSum([-1, 0, 1, 2, -1, -4]));
console.log(ThreeSum([0, 1, 1]));
console.log(ThreeSum([0, 0, 0]));
// Time complexity:-O(n**2)
function ThreeSum(nums) {
  let finalResult = [];
  //sort the array to make esay to ignore to dupliucate
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        finalResult.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        //skip duplicate for j and k
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }

        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }

  return finalResult;
}
console.log(ThreeSum([-1, 0, 1, 2, -1, -4]));
console.log(ThreeSum([0, 1, 1]));
console.log(ThreeSum([0, 0, 0]));
// Time complexity:-O(n**2)

//Optimal Approach

// ===============================================================================
// Q 4 Sum
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
function fourSum(nums, target) {
  let n = nums.length;
  let finalResult = [];

  // Sort the array to make it easier to avoid duplicates
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for i
    for (let j = i + 1; j < n; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue; // Skip duplicates for j
      let k = j + 1;
      let l = n - 1;

      while (k < l) {
        const sum = nums[i] + nums[j] + nums[k] + nums[l];

        if (sum === target) {
          finalResult.push([nums[i], nums[j], nums[k], nums[l]]);
          k++;
          l--;
          // Skip duplicates for k and l
          while (k < l && nums[k] === nums[k - 1]) k++;
          while (k < l && nums[l] === nums[l + 1]) l--;
        } else if (sum < target) {
          k++;
        } else {
          l--;
        }
      }
    }
  }
  return finalResult;
}
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
// time complexity:-O(n**3)
// =======================================================================================
// Q Kth Smallest Elments in sorted Matrix
// Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// You must find a solution with a memory complexity better than O(n2).

// Example 1:

// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
// Example 2:

// Input: matrix = [[-5]], k = 1
// Output: -5

//Brute
function kthSmallestElm(matrix, k) {
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      res.push(matrix[i][j]);
    }
  }
  return res.sort((a, b) => a - b).at(k - 1);
}
console.log(
  kthSmallestElm(
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    (k = 8)
  )
);
console.log(kthSmallestElm([[-5]], (k = 1)));

function kthSmallestElm(matrix, k) {
  let flattedArr = matrix.flat(Infinity).sort((a, b) => a - b);
  return flattedArr.at(k - 1);
}
console.log(
  kthSmallestElm(
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15],
    ],
    (k = 8)
  )
);
console.log(kthSmallestElm([[-5]], (k = 1)));
// =======================================================================================
// Q Kth largest Elm
// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
//Brute Approach
function kthLargestElm(nums, k) {
  return nums.sort((a, b) => a - b).at(nums.length - k - 1);
}
console.log(kthLargestElm([3, 2, 1, 5, 6, 4], 2));
console.log(kthLargestElm([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));

//Better Approach
function kthLargestElm(nums, k) {
  const largest = Math.max(...nums);

  const counts = new Map();

  for (const num of nums) {
    const diff = largest - num;
    counts.set(diff, (counts.get(diff) || 0) + 1);
  }

  console.log(counts);
  let count = 0;
  let diff = 0;

  while (count < k) {
    count += counts.get(diff) || 0;
    diff++;
    console.log(count, diff);
  }

  return largest - diff + 1;
}
console.log(kthLargestElm([3, 2, 1, 5, 6, 4], 2));
console.log(kthLargestElm([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
// Time complexity:-O(n+d)

//Optimla Approach
function kthLargestElm(nums, k) {
  const minVal = Math.min(...nums);
  const maxVal = Math.max(...nums);
  let range = maxVal - minVal + 1;
  let arr = new Array(range).fill(0);
  for (let num of nums) {
    arr[num - minVal]++;
  }
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    count += arr[i];
    if (count >= k) return i + minVal;
  }
}
console.log(kthLargestElm([3, 2, 1, 5, 6, 4], 2));
console.log(kthLargestElm([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
// Time complexity:-O(n)
// ======================================================================================
//Q Valid triangle
// Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

// Example 1:

// Input: nums = [2,2,3,4]
// Output: 3
// Explanation: Valid combinations are:
// 2,3,4 (using the first 2)
// 2,3,4 (using the second 2)
// 2,2,3

// Example 2:

// Input: nums = [4,2,3,4]
// Output: 4

//Brute Approach
function countValidTriangle(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (
          nums[i] + nums[j] > nums[k] &&
          nums[k] + nums[j] > nums[i] &&
          nums[i] + nums[k] > nums[j]
        ) {
          count++;
        }
      }
    }
  }
  return count;
}
console.log(countValidTriangle([2, 2, 3, 4]));
console.log(countValidTriangle([4, 2, 3, 4]));
//time complexity:-O (n^3)

function countValidTriangle(nums) {
  let count = 0;
  nums.sort((a, b) => a - b);
  for (let k = 2; k < nums.length; k++) {
    let i = 0;
    let j = k - 1;
    while (i < j) {
      if (nums[i] + nums[j] > nums[k]) {
        count += j - i;
        j--;
      } else {
        i++;
      }
    }
  }
  return count;
}
console.log(countValidTriangle([2, 2, 3, 4]));
console.log(countValidTriangle([4, 2, 3, 4]));
//time complexity:-O (n log n)
// ======================================================================================
// Q Rotate sorted Array
// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1
// //Brute Approach
// function sreach(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (target === nums[i]) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(sreach([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(sreach([4, 5, 6, 7, 0, 1, 2], 3));
console.log(sreach([1], 0));
// //time complexity:O (n log n)

function sreach(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // Target is in the right half
      } else {
        right = mid - 1; // Target is in the left half
      }
    }
  }

  return -1; // Target not found
}
console.log(sreach([4, 5, 6, 7, 0, 1, 2], 0));
console.log(sreach([4, 5, 6, 7, 0, 1, 2], 3));
console.log(sreach([1], 0));
console.log(sreach([1], 0));
console.log(sreach([5, 1, 3], 3));
// =====================================================================================
//Q Integer to roman
// Seven different symbols represent Roman numerals with the following values:

// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
// Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

// If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
// If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
// Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
// Given an integer, convert it to a Roman numeral.

// Example 1:

// Input: num = 3749

// Output: "MMMDCCXLIX"

// Explanation:

// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC as 500 (D) + 100 (C) + 100 (C)
//   40 = XL as 10 (X) less of 50 (L)
//    9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
// Example 2:

// Input: num = 58

// Output: "LVIII"

// Explanation:

// 50 = L
//  8 = VIII
// Example 3:

// Input: num = 1994

// Output: "MCMXCIV"

// Explanation:

// 1000 = M
//  900 = CM
//   90 = XC
//    4 = IV

function integerToRoman(num) {
  const M = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";
  Object.entries(M).forEach(([k, v]) => {
    result += k.repeat(Math.floor(num / v));
    num %= v;
  });
  return result;
}
console.log(integerToRoman(3749));
console.log(integerToRoman(58));
console.log(integerToRoman(1994));
// =======================================================================================
//Q 10 Best time to buy and sell stock ||
//Brute Approach
function maxProfit(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));

//Better Approach
function maxProfit(prices) {
  let cast = [0];
  let stock = [-prices[0]];
  for (let i = 1; i < prices.length; i++) {
    cast[i] = Math.max(cast[i - 1], stock[i - 1] + prices[i]);
    stock[i] = Math.max(stock[i - 1], cast[i - 1] - prices[i]);
  }
  return cast[prices.length - 1];
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));

// =======================================================================================
//Q  jump game
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

function canJump(nums) {
  let maxIndex = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (i > maxIndex) {
      return false;
    }
    maxIndex = Math.max(maxIndex, i + nums[i]);
  }
  return maxIndex >= nums.length - 1;
}
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
function canJump(nums) {
  let goal = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0;
}
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
// =========================================================================================
//Q jump game ||
// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

//Optimal Approach
function jump(nums) {
  let jumps = 0;
  let l = 0;
  let r = 0;
  while (r < nums.length - 1) {
    let max = 0;
    for (let i = 0; i <= r; i++) {
      max = Math.max(i + nums[i], max);
    }
    l = r + 1;
    r = max;
    jumps = jumps + 1;
  }
  return jumps;
}
console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
// Time complexity:-O(n)
// =========================================================================================
// // Q Group Anagram
// Given an array of strings strs, group the
// anagrams
//  together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

function groupAnagram(strs) {
  let map = {};
  for (let s of strs) {
    let keys = s.split("").sort().join("");
    if (map[keys]) {
      map[keys].push(s);
    } else {
      map[keys] = [s];
    }
  }
  return Object.values(map);
}
console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagram([""]));
console.log(groupAnagram(["a"]));
// time complexity:-O(n*klogk)

function groupAnagram(strs) {
  let map = {};
  let array = Array.from(26).fill(0);

  for (let s of strs) {
    for (let i = 0; i < s.length; i++) {
      let ascci = s.charCodeAt(i);
      array[ascci - 97] += 1;
    }
    const keys = array.join("-");
    if (map[keys]) {
      map[keys].push(s);
    } else {
      map[keys] = [s];
    }
  }
  return Object.values(map);
}
console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagram([""]));
console.log(groupAnagram(["a"]));
//time complexity:-O(nk)
//========================================================================================
//Q H-index
// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

// Example 1:

// Input: citations = [3,0,6,1,5]
// Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
// Example 2:

// Input: citations = [1,3,1]
// Output: 1
function hIndex(citations) {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    let count = 0;
    for (let j = 0; j < citations.length; j++) {
      if (citations[i] <= citations[j]) {
        count++;
      }
    }
    if (count >= citations[i]) {
      return citations[i];
    }
  }
  return citations.length;
}
console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([1, 3, 1]));
console.log(hIndex([100]));
//Time complexity:O(n^2)

function hIndex(citations) {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i) {
      return i;
    }
  }
  return citations.length;
}
console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([1, 3, 1]));
//time complexity:O(n log n)
// ======================================================================================
//Q Top k frequncy words
// Given an array of strings words and an integer k, return the k most frequent strings.

// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

// Example 1:

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
function topKFrequncyWord(words, k) {
  let map = new Map();
  for (let word of words) {
    if (map.has(word)) map.set(word, map.get(word) + 1);
    else map.set(word, 1);
  }
  let arr = new Array();
  for (let keys of map.keys()) {
    arr.push(keys);
  }
  arr.sort();
  arr.sort((a, b) => map.get(b) - map.get(a));
  return arr.slice(0, k);
}
console.log(
  topKFrequncyWord(["i", "love", "leetcode", "i", "love", "coding"], 2)
);
console.log(
  topKFrequncyWord(["i", "love", "leetcode", "i", "love", "coding"], 3)
);
console.log(
  topKFrequncyWord(
    ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
    4
  )
);
// =======================================================================================
//Q Largest Number At Least Twice of others
// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

// Example 1:

// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.

function dominantIndex(nums) {
  let l = Math.max(...nums);
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (l >= 2 * nums[i]) {
      count++;
    }
  }
  return count === nums.length - 1 ? nums.indexOf(l) : -1;
}
console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
//time complextiy:-O(n)
function dominantIndex(nums) {
  let maxIndex = 0;
  let l = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > l) {
      l = nums[i];
      maxIndex = i;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i !== maxIndex && l < 2 * nums[i]) {
      return -1;
    }
  }
  return maxIndex;
}
console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
//Time complexity:-o(n**2)
// =====================================================================================
//Q Keep Multiplying Found values by Two
// You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.

// You then do the following steps:

// If original is found in nums, multiply it by two (i.e., set original = 2 * original).
// Otherwise, stop the process.
// Repeat this process with the new number as long as you keep finding the number.
// Return the final value of original.

// Example 1:

// Input: nums = [5,3,6,1,12], original = 3
// Output: 24
// Explanation:
// - 3 is found in nums. 3 is multiplied by 2 to obtain 6.
// - 6 is found in nums. 6 is multiplied by 2 to obtain 12.
// - 12 is found in nums. 12 is multiplied by 2 to obtain 24.
// - 24 is not found in nums. Thus, 24 is returned.
// Example 2:

// Input: nums = [2,7,9], original = 4
// Output: 4
// Explanation:
// - 4 is not found in nums. Thus, 4 is returned.
// function findFinalValue(nums, original) {
//   for (let i = 0; i < nums.length; i++) {
//     if (original === nums[i]) {
//       original =2*nums[i]

//     }

//   }
//   return original
// }
// console.log(findFinalValue([5, 3, 6, 1, 12], 3));
// console.log(findFinalValue([2, 7, 9], 4));
// console.log(findFinalValue([8,19,4,2,15,3], 2));
// //Better Approach
function findFinalValue(nums, original) {
  while (nums.includes(original)) original = 2 * original;
  return original;
}
console.log(findFinalValue([5, 3, 6, 1, 12], 3));
console.log(findFinalValue([2, 7, 9], 4));
console.log(findFinalValue([8, 19, 4, 2, 15, 3], 2));

//Optimal Approach
function findFinalValue(nums, original) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = nums[i];
    }
  }
  while (original === obj[original]) {
    original = 2 * original;
  }
  return original;
}
console.log(findFinalValue([5, 3, 6, 1, 12], 3));
console.log(findFinalValue([2, 7, 9], 4));
console.log(findFinalValue([8, 19, 4, 2, 15, 3], 2));
//Time complexity:-O(n)
// =======================================================================================
// Q How many number smaller then the current number
// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Example 1:

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]
//Brute Approach
function smallerNumbersThanCurrent(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));
//Time Complexity:-O(n**2)

// function smallerNumbersThanCurrent(nums) {
//   let result = [];
//   let sorted = nums.slice().sort((a, b) => a - b);
//   for (let i = 0; i < nums.length; i++) {
//     result.push(sorted.indexOf(nums[i]));
//   }
//   return result;
// }
// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));
// //Time complexity:-O(n**2)

// //Better Approach
function smallerNumbersThanCurrent(nums) {
  let sorted = [...nums].sort((a, b) => a - b);
  return nums.map((elm) => sorted.indexOf(elm));
}
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));
//Time complexity:-O(n**2)
// =====================================================================================

// Hash Map Question
// //Q isomprehic string
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "foo", t = "bar"

// Output: false

// Explanation:

// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true
//Brute Approach
function isIsmorephic(s, t) {
  if (s.length !== t.length) return false;
  let sMap = new Map();
  let tMap = new Map();
  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if (!sMap.has(charS)) {
      sMap.set(charS, charT);
    } else if (sMap.get(charS) !== charT) {
      return false;
    }

    if (!tMap.has(charT)) {
      tMap.set(charT, charS);
    } else if (tMap.get(charT) !== charS) {
      return false;
    }
  }
  return true;
}
console.log(isIsmorephic("egg", "add"));
console.log(isIsmorephic("foo", "bar"));
console.log(isIsmorephic("paper", "title"));
console.log(isIsmorephic("badc", "baba"));
//Time complexity:-O(n)
//
function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < s.length; i++) {
    if (arr1[s.charAt(i)] !== arr2[t.charAt(i)]) {
      return false;
    }
    arr1[s.charAt(i)] = i + 1;
    arr2[t.charAt(i)] = i + 1;
  }
  return true;
}

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsmorephic("badc", "baba"));

//Time complexity:-O(n)
// =======================================================================================
// Q Kth Distinct string in an Array
// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.

// Example 1:

// Input: arr = ["d","b","c","b","c","a"], k = 2
// Output: "a"
// Explanation:
// The only distinct strings in arr are "d" and "a".
// "d" appears 1st, so it is the 1st distinct string.
// "a" appears 2nd, so it is the 2nd distinct string.
// Since k == 2, "a" is returned.
// Example 2:

// Input: arr = ["aaa","aa","a"], k = 1
// Output: "aaa"
// Explanation:
// All strings in arr are distinct, so the 1st string "aaa" is returned.
// Example 3:

// Input: arr = ["a","b","a"], k = 3
// Output: ""
// Explanation:
// The only distinct string is "b". Since there are fewer than 3 distinct strings, we return an empty string "".
//Brute Approach
function kthDistnictString(arr, k) {
  let dis = [];
  let map = new Map();
  for (let char of arr) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let [keys, value] of map.entries()) {
    if (value === 1) {
      dis.push(keys);
    }
  }
  return dis.length >= k ? dis[k - 1] : "";
}
console.log(kthDistnictString(["d", "b", "c", "b", "c", "a"], 2));
console.log(kthDistnictString(["aaa", "aa", "a"], 1));
console.log(kthDistnictString(["a", "b", "a"], 3));
//Time complexity:-O(n)

//Better Approach
function kthDistnictString(arr, k) {
  let map = {};
  for (let s of arr) map[s] ? map[s]++ : (map[s] = 1);
  for (let s of arr) {
    if (map[s] > 1) continue;
    if (k-- == 1) return s;
  }
  return "";
}

console.log(kthDistnictString(["d", "b", "c", "b", "c", "a"], 2));
console.log(kthDistnictString(["aaa", "aa", "a"], 1));
console.log(kthDistnictString(["a", "b", "a"], 3));
// ======================================================================================
//Q Check if N is double exist

// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.

//Brute Appraoch
function isDoubleExist(arr) {
  let flag = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j) {
        if (arr[i] == 2 * arr[j]) {
          flag = 1;
          return true;
        }
      }
    }
  }
  if (flag == 0) {
    return false;
  }
}
console.log(isDoubleExist([10, 2, 5, 3]));
console.log(isDoubleExist([3, 1, 7, 11]));
//time complexity:-O(n**2)

function isDoubleExist(arr) {
  let seen = new Set();
  for (let elm of arr) {
    if (seen.has(elm * 2) || (elm % 2 === 0 && seen.has(elm / 2))) {
      return true;
    }
    seen.add(elm);
  }
  return false;
}
console.log(isDoubleExist([10, 2, 5, 3]));
console.log(isDoubleExist([3, 1, 7, 11]));
//time complexity:-O(n)

// =======================================================================================
//String
//Q Roate String
// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false
//Brute Approach
function rotateString(s, goal) {
  if (s.length !== goal.length) return false;

  let doubleS = s + s;

  return doubleS.includes(goal);
}
console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "abced"));
//Time complexity:O(n)

//Optimal Approach
function rotateString(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  for (let i = 0, len = s.length; i < len; i++) {
    s += s[0];
    s = s.substring(1, s.length);

    if (s === goal) {
      return true;
    }
  }

  return false;
}
console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "abced"));
//Time complexity:-O(n)
// =====================================================================================
//Q Maximum Nesting Depth of the paranethses
// Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

// Example 1:

// Input: s = "(1+(2*3)+((8)/4))+1"

// Output: 3

// Explanation:

// Digit 8 is inside of 3 nested parentheses in the string.

// Example 2:

// Input: s = "(1)+((2))+(((3)))"

// Output: 3

// Explanation:

// Digit 3 is inside of 3 nested parentheses in the string.

// Example 3:

// Input: s = "()(())((()()))"

// Output: 3

function findMaxDepth(s) {
  let currentDepth = 0;
  let maxDepth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      currentDepth++;
    } else if (s[i] === ")") {
      currentDepth--;
    }
    maxDepth = Math.max(currentDepth, maxDepth);
  }
  return maxDepth;
}
console.log(findMaxDepth("(1+(2*3)+((8)/4))+1"));
console.log(findMaxDepth("(1)+((2))+(((3)))"));
console.log(findMaxDepth("()(())((()()))"));
function findMaxDepth(s) {
  let res = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      res.push(s[i]);
    } else if (s[i] === ")") {
      count = res.length >= count ? res.length : count; //math.max(count,res.length)
      res.pop();
    }
  }
  return count;
}
console.log(findMaxDepth("(1+(2*3)+((8)/4))+1"));
console.log(findMaxDepth("(1)+((2))+(((3)))"));
console.log(findMaxDepth("()(())((()()))"));
// =====================================================================================
//Q Maximum Product of subarray
// Given an integer array nums, find a
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

function maxProductOfSubArr(nums) {
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = i; j < nums.length; j++) {
      product = product * nums[j];
      maxSum = Math.max(product, maxSum);
    }
  }
  return maxSum;
}
console.log(maxProductOfSubArr([2, 3, -2, 4]));
console.log(maxProductOfSubArr([-2, 0, -1]));

function maxProductOfSubArr(nums) {
  let n = nums.length;
  let maxSum = 0;
  let pre = 1;
  let suff = 1;
  for (let i = 0; i < n; i++) {
    if (pre === 0) pre = 1;
    if (suff === 0) suff = 1;
    pre = pre * nums[i];
    suff = suff * nums[n - i - 1];
    maxSum = Math.max(maxSum, Math.max(pre, suff));
  }
  return maxSum;
}
console.log(maxProductOfSubArr([2, 3, -2, 4]));
console.log(maxProductOfSubArr([-2, 0, -1]));

function maxProductOfSubArr(nums) {
  let preMax = nums[0];
    let preMin = nums[0];
    let result = nums[0];

    for(let i = 1; i < nums.length; i++){
        let currMax = Math.max(nums[i], nums[i]*preMax, nums[i]*preMin);
        let currMin = Math.min(nums[i], nums[i]*preMax, nums[i]*preMin);

        preMax = currMax;
        preMin = currMin;

        result = Math.max(result, currMax);
    }
    return result;
}
console.log(maxProductOfSubArr([2, 3, -2, 4]));
console.log(maxProductOfSubArr([-2, 0, -1]));
// =====================================================================================