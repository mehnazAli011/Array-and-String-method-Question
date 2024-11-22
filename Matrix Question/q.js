//  Q 1. How to do flat array without use flat method.

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
// function flatArr(matrix, target) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (matrix[i][j] === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(
//   flatArr(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     3
//   )
// ); // false

// console.log(
//   flatArr(
//     [
//       [1, 3, 5, 7],
//       [10, 11, 16, 20],
//       [23, 30, 34, 60],
//     ],
//     13
//   )
// ); // false
// //Time complexity:O(n*m)

//Better Approach
function searchMatrix(matrix, target) {
  let n = matrix.length - 1;
  let m = matrix[0].length;
  let low = 0;
  let high = n * m - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    row = Math.floor(mid / m);
    col = mid % m;
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
); // false
//
//Time complexity:O(log (m*n))

//       <------------------------------------------------------>
