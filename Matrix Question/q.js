//  Q 1. How to do flat array with out use flat method.

function flatTheArray(matrix) {
  let result = [];
  matrix.forEach((arr) => {
    if (Array.isArray(arr)) {
      result = result.concat(flatTheArray(arr)); //use recursion call itself
    } else {
      result.push(arr);
    }
  });
  return result;
}
console.log(flatTheArray([[[1, 2, 3]]]));
console.log(flatTheArray([[[1, 2, 3], 4, 5]]));

//       <------------------------------------------------------>

// Q 2 Search a 2D Matrix

// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13

//Brute Approach
function flatArr(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(
  flatArr(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
); // false

console.log(
  flatArr(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
); // false
//Time complexity:O(n**2)

//Better Approach
function flattenArr(matrix, target) {
  let result = [];
  matrix.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArr(item));
    } else {
      result.push(item);
    }
  });
  return result;
}
function flatArr(nums, target) {
  const flattend = flattenArr(nums);
  return flattend.includes(target);
}

console.log(
  flatArr(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
); // false

console.log(
  flatArr(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
); // false
//
//Time complexity:O(n)

//       <------------------------------------------------------>
