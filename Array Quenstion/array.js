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

//Q 4 Count Array pairs Divisible by k
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

function countPair(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] * nums[j]) % k === 0) {
        count++;
      }
    }
  }
  return count;
}
console.log(countPair([1, 2, 3, 4, 5], 2));
console.log(countPair([1, 2, 3, 4], 5));
