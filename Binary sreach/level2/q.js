//Q Find single in a sorted Array

// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.

// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10

function findSingleElm(nums) {
  if (nums.length === 1) return nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      if (nums[i] !== nums[i + 1]) return nums[i];
    } else if (i === nums.length - 1) {
      if (nums[i] !== nums[i - 1]) return nums[i];
    } else {
      if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
        return nums[i];
      }
    }
  }
}
console.log(findSingleElm([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(findSingleElm([3, 3, 7, 7, 10, 11, 11]));
//Time complexity:O(n)

//Better Approach

function findSingleElm(nums) {
  if (nums.length === 1) return nums[0];
  else if (nums[0] !== nums[1]) return nums[0];
  else if (nums[nums.length - 1] !== nums[nums.length - 2])
    return nums[nums.length - 1];
  let low = 1;
  let high = nums.length - 2;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1])
      return nums[mid];
    else if (
      (mid % 2 === 1 && nums[mid] === nums[mid - 1]) ||
      (mid % 2 === 0 && nums[mid] === nums[mid + 1])
    )
      low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
console.log(findSingleElm([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(findSingleElm([3, 3, 7, 7, 10, 11, 11]));
//time complexty:-O(nlog n);
//space complexity:O(1)
