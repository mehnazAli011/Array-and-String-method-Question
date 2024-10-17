// Q 1 Super pow
// Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.

// Example 1:

// Input: a = 2, b = [3]
// Output: 8
// Example 2:

// Input: a = 2, b = [1,0]
// Output: 1024
// Example 3:

// Input: a = 1, b = [4,3,3,8,5,2]
// Output: 1

function superPow(a, b) {
  let s = "";
  for (let i = 0; i < b.length; i++) {
    s += b[i];
  }
  return a ** Number(s);
}
console.log(superPow(2, [3]));
console.log(superPow(2, [1, 0]));
console.log(superPow(1, [4, 3, 3, 8, 5, 2]));
