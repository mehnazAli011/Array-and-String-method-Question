// // Array method question for practice

// //                                        easy Question
// // Q1.Given the array integer, write a function find the maximum element in the array.
// const arr = [1, 2, 3, 4, 5, 6];

// // =>1.Approch
// function findTheMaxElmInArr(arr) {
//   //use Math Object and speard operator(...)
//   return Math.max(...arr);
// }
// console.log(findTheMaxElmInArr(arr));
// // -------------------------------------------------------
// // =>2.Apprcoh
// function findTheMaxElmInArr(arr) {
//   max = arr.reduce((priviouseValue, currentValue) => {
//     //use ternary operator
//     return priviouseValue <= currentValue ? currentValue : priviouseValue;
//     // currentValue<priviouseValue
//     //1<=1   =>1
//     //1<=2   =>2
//     //2<=3   =>3
//     //3<=4   =>4
//     //4<=5   =>5
//     //5<=6   =>6
//     //final result is 6
//   }, arr[0]);
//   return max;
// }
// console.log(findTheMaxElmInArr(arr));
// //----------------------------------------------------------------
// // //3.Approch
// function findTheMaxElmInArr(arr) {
//   let max = arr[0];
//   arr.forEach((elm) => {
//     if (elm > max) {
//       max = elm;
//     }
//   });
//   return max;
// }
// console.log(findTheMaxElmInArr(arr));
// // // ===============================================================================

// // Q2.Given the array integer, write a function find the all even element in the array.

// // =>1 Apprcoh!
// function findAllEvenElmInArr(arr) {
//   return arr.filter((elm) => elm % 2 == 0);
// }
// console.log(findAllEvenElmInArr(arr));

// // // -------------------------------------------------------
// // // =>2 Approch

// function findAllEvenElmInArr(arr) {
//   return arr.reduce((privousValue, currentValue) => {
//     if (currentValue % 2 == 0) {
//       privousValue.push(currentValue);
//     }
//     return privousValue;
//   }, []);
// }
// console.log(findAllEvenElmInArr(arr));
// // ----------------------------------------------------
// //=>3 Approch
// function findAllEvenElmInArr(arr) {
//   let evenNums = [];
//   arr.forEach((element) => {
//     if (element % 2 == 0) {
//       evenNums.push(element);
//     }
//   });
//   return evenNums;
// }
// console.log(findAllEvenElmInArr(arr));
// // // ================================================================================

// Q2.Creates a new array with  the result multplie for every element  in array.

// =>1 Apprcoh!
// function modifiyTheArr(arr) {
//   return arr.map((elm) => elm * 2);
// }
// console.log(modifiyTheArr(arr));

// //------------------------------------------------

// //2 Apprcoh
// function modifiyTheArr(arr) {
//   let mArr = [];
//   arr.forEach((element) => {
//     mArr.push(element * 2);
//   });
//   return mArr;
// }
// console.log(modifiyTheArr(arr));
// // =================================================================================

// Q4. find the given arr  sum.
// //1=>
// function findSumOfArr(arr) {
//   return arr.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(findSumOfArr(arr));
// // -----------------------------
// //=>2
// function findSumOfArr(arr) {
//   let sum = 0;
//   arr.forEach((elm) => {
//     sum += elm;
//   });
//   return sum;
// }
// console.log(findSumOfArr(arr));
// // ================================================================================

// Q5 Find the givene array first even number.

// =>1
// function firstEvenNumber(arr) {
//   return arr.find((elm) => elm % 2 == 0);
// }
// console.log(firstEvenNumber(arr));
// // -----------------------------------------------
// // =>2
// function firstEvenNumber(arr) {
//   return arr.at(arr.findIndex((elm) => elm % 2 == 0));
// }
// console.log(firstEvenNumber(arr));
// // -------------------------------------------------
// // =>3
// function firstEvenNumber(arr) {
//   return arr.filter((elm) => elm % 2 == 0).at(0);
// }
// console.log(firstEvenNumber(arr));
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
