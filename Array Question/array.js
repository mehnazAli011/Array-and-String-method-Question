// // Q 1.left and right sum difference
// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
// Example 2:

// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].
//Brute Appraoch
function leftAndRightSumDiff(nums) {
  let leftSum = 0;
  let rightSum = 0;
  let leftArr = [0];
  let rightArr = [];
  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    leftArr.push(leftSum);
  }

  for (let i = nums.length - 1; i >= 1; i--) {
    rightSum += nums[i];
    rightArr[i - 1] = rightSum;
  }
  rightArr.push(0);
  for (let j = 0; j < nums.length; j++) {
    result.push(Math.abs(leftArr[j] - rightArr[j]));
  }
  return result;
}
console.log(leftAndRightSumDiff([10, 4, 8, 3]));
console.log(leftAndRightSumDiff([1]));

function leftAndRightSumDiff(nums) {
  const left = [0];
  const right = [0];
  const ans = [];
  //left sum
  for (let i = 0; i < nums.length - 1; i++) {
    left.push(nums[i] + left[i]);
  }
  //right sun
  for (let j = nums.length - 1; j > 0; j--) {
    const pop = right.pop();
    ans.unshift(Math.abs(left[j] - pop));
    right.push(nums[j] + pop);
  }
  ans.unshift(right.pop());

  return ans;
}
console.log(leftAndRightSumDiff([10, 4, 8, 3]));
console.log(leftAndRightSumDiff([1]));

// //Better Approach
function leftAndRightSumDiff(nums) {
  let left = 0;
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const rightSum = nums.slice(i + 1).reduce((a, b) => a + b, 0);
    result.push(Math.abs(left - rightSum));
    left += nums[i];
  }
  return result;
}
console.log(leftAndRightSumDiff([10, 4, 8, 3]));
console.log(leftAndRightSumDiff([1]));

//Q 2 Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
function runningSum(nums) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }
  return result;
}
console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
//Time complexity:-O(n)
function runningSum(nums) {
  nums.reduce((a, b, c, arr) => (arr[c] += a));
  return nums;
}
console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));

//Another Approach
function runningSum(nums) {
  let result = [];
  nums.reduce((a, b) => {
    a += b;
    return result.push(a);
  }, 0);
  return result;
}
console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
// ========================================================================================
// Q 3Number of the good Pair |
// You are given 2 integer arrays nums1 and nums2 of lengths n and m respectively. You are also given a positive integer k.

// A pair (i, j) is called good if nums1[i] is divisible by nums2[j] * k (0 <= i <= n - 1, 0 <= j <= m - 1).

// Return the total number of good pairs.

// Example 1:

// Input: nums1 = [1,3,4], nums2 = [1,3,4], k = 1

// Output: 5

// Explanation:

// The 5 good pairs are (0, 0), (1, 0), (1, 1), (2, 0), and (2, 2).
// Example 2:

// Input: nums1 = [1,2,4,12], nums2 = [2,4], k = 3

// Output: 2

// Explanation:

// The 2 good pairs are (3, 0) and (3, 1).

//Brute Approach
function countGoodPair(nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] % (nums2[j] * k) === 0) result.push([i, j]);
    }
  }
  return result.length;
}
console.log(countGoodPair([1, 3, 4], [1, 3, 4], (k = 1)));
console.log(countGoodPair([1, 2, 4, 12], [2, 4], (k = 3)));

//Other Appraoch
function countGoodPair(nums1, nums2, k) {
  let count = 0;
  nums1.forEach((elm1) => {
    nums2.forEach((elm2) => {
      if (elm1 % (elm2 * k) === 0) {
        count++;
      }
    });
  });
  return count;
}
console.log(countGoodPair([1, 3, 4], [1, 3, 4], 1)); //5
console.log(countGoodPair([1, 2, 4, 12], [2, 4], 3)); //2

// ======================================================================================
//Q 5 Find last and first postion elmement in sorted arrray.
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

//Brute Appraoch
function sreachRange(nums, target) {
  if (nums.length === 0 || !nums.includes(target)) {
    return [-1, -1];
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res.push(i);
    }
  }
  return res;
}
console.log(sreachRange([5, 7, 7, 8, 8, 10], 8));
console.log(sreachRange([5, 7, 7, 8, 8, 10], 9));

//Optimal Approach
function sreachRange(nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  }
  let first = -1;
  let last = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      first = i;
      break;
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) {
      last = i;
      break;
    }
  }
  return [first, last];
}
console.log(sreachRange([5, 7, 7, 8, 8, 10], 8));
console.log(sreachRange([5, 7, 7, 8, 8, 10], 9));
console.log(sreachRange([], 0));
// Time complexity:O(n**2)
// ======================================================================================
// Q Find minimum in Rotated Sorted Array
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:

// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
//Brute Approach
function findMinimunElm(nums) {
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[0];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }
  return nums[0];
}
console.log(findMinimunElm([3, 4, 5, 1, 2]));
console.log(findMinimunElm([4, 5, 6, 7, 0, 1, 2]));
console.log(findMinimunElm([11, 13, 15, 17]));
//Time complexity:O(n**2)

// function findMinimunElm(nums) {
//   return Math.min(...nums);
// }
// console.log(findMinimunElm([3, 4, 5, 1, 2]));
// console.log(findMinimunElm([4, 5, 6, 7, 0, 1, 2]));
// console.log(findMinimunElm([11, 13, 15, 17]));
// //Binary sreach
function findMinimunElm(nums) {
  let left = 0;
  let right = nums.length - 1;
  let ans = Infinity;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[left] <= nums[mid]) {
      ans = Math.min(nums[left], ans);
      left = mid + 1;
    } else {
      ans = Math.min(ans, nums[mid]);
      right = mid - 1;
    }
  }
  return ans;
}
console.log(findMinimunElm([3, 4, 5, 1, 2]));
console.log(findMinimunElm([4, 5, 6, 7, 0, 1, 2]));
console.log(findMinimunElm([11, 13, 15, 17]));
//Time  complexity:O(log n)
// =========================================================================================
//Q 7 Number of Employees Who met the Target
// There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.

// The company requires each employee to work for at least target hours.

// You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.

// Return the integer denoting the number of employees who worked at least target hours.

// Example 1:

// Input: hours = [0,1,2,3,4], target = 2
// Output: 3
// Explanation: The company wants each employee to work for at least 2 hours.
// - Employee 0 worked for 0 hours and didn't meet the target.
// - Employee 1 worked for 1 hours and didn't meet the target.
// - Employee 2 worked for 2 hours and met the target.
// - Employee 3 worked for 3 hours and met the target.
// - Employee 4 worked for 4 hours and met the target.
// There are 3 employees who met the target.
// Example 2:

// Input: hours = [5,1,4,2,2], target = 6
// Output: 0
// Explanation: The company wants each employee to work for at least 6 hours.
// There are 0 employees who met the target.
//Brute Approach
// function numberOfEmployeesWhoMetTarget(hours, target) {
//   let count = 0;
//   for (let i = 0; i < hours.length; i++) {
//     if (target <= hours[i]) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2));
// console.log(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6));
//Time complexity: O(n)
function numberOfEmployeesWhoMetTarget(hours, target) {
  return hours.filter((elm=>elm>=target)).length
}
console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2));
console.log(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6));
//Time complexity: O(n)
// ======================================================================================
console.log(7+9+54+16+39+16+17+12+30+31+25+18+15+32+40+7+31);
