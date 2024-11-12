//Q 1.Binary search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

function sreach(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
console.log(sreach([-1, 0, 3, 5, 9, 12], 9));
console.log(sreach([-1, 0, 3, 5, 9, 12], 2));
console.log(sreach([5], 5));
//Time complexity:O(n logn)
//space complexity:O(1)

//           <---------------------------------------------------------->

// Q Kth Missing Postivie Number

// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Return the kth positive integer that is missing from this array.

// Example 1:

// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
// Example 2:

// Input: arr = [1,2,3,4], k = 2
// Output: 6
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

//Brute force Approach

function kthMissingElm(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= k) k++;
    else break;
  }
  return k;
}
console.log(kthMissingElm([2, 3, 4, 7, 11], 5));
console.log(kthMissingElm([1, 2, 3, 4], 2));
//time complexity:O(n)
//space complexity:O(1)

//Optimal Approach
function kthMissingElm(nums, k) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    missing = nums[mid] - (mid + 1);
    if (missing < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low + k;
}
console.log(kthMissingElm([2, 3, 4, 7, 11], 5));
console.log(kthMissingElm([1, 2, 3, 4], 2));
console.log(kthMissingElm([4, 7, 9], 3));
console.log(kthMissingElm([1, 2], 1));
// time complexity:O(log n)
//space complexity:O(1)
