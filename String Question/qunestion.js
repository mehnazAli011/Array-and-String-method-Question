// Q 1.Split a string in Balanced Strings
// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:

// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
// Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.
// Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".
//Brute Approach
function countSubString(s) {
  let count = 0;
  let subString = 0;
  for (let char of s) {
    if (char === "R") {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      subString++;
    }
  }
  return subString;
}
console.log(countSubString("RLRRLLRLRL"));
console.log(countSubString("RLRRRLLRLL"));
console.log(countSubString("LLLLRRRR"));
//Time complexiy:O(n)
// =======================================================================================
//Q 2 Split String By separator
// Given an array of strings words and a character separator, split each string in words by separator.

// Return an array of strings containing the new strings formed after the splits, excluding empty strings.

// Notes

// separator is used to determine where the split should occur, but it is not included as part of the resulting strings.
// A split may result in more than two strings.
// The resulting strings must maintain the same order as they were initially given.

// Example 1:

// Input: words = ["one.two.three","four.five","six"], separator = "."
// Output: ["one","two","three","four","five","six"]
// Explanation: In this example we split as follows:

// "one.two.three" splits into "one", "two", "three"
// "four.five" splits into "four", "five"
// "six" splits into "six"

// Hence, the resulting array is ["one","two","three","four","five","six"].
// Example 2:

// Input: words = ["$easy$","$problem$"], separator = "$"
// Output: ["easy","problem"]
// Explanation: In this example we split as follows:

// "$easy$" splits into "easy" (excluding empty strings)
// "$problem$" splits into "problem" (excluding empty strings)

// Hence, the resulting array is ["easy","problem"].
// Example 3:

// Input: words = ["|||"], separator = "|"
// Output: []
// Explanation: In this example the resulting split of "|||" will contain only empty strings, so we return an empty array [].

function splitWordsBySeparator(words, separator) {
  return words
    .join(" ")
    .split(separator)
    .join(" ")
    .split(" ")
    .filter((word) => word !== "");
}
console.log(splitWordsBySeparator(["one.two.three", "four.five", "six"], "."));
console.log(splitWordsBySeparator(["$easy$", "$problem$"], "$"));
console.log(splitWordsBySeparator(["|||"], "|"));
// ==========================================================================================
//Q 3 Detect Capital
// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.

// Example 1:

// Input: word = "USA"
// Output: true
// Example 2:

// Input: word = "FlaG"
// Output: false

// function detectCapitalUse(word) {
//   let result = "";
//   let upperCaseString = word.toUpperCase();
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === upperCaseString[i]) {
//       result += word[i];
//     }
//   }
//   if (result.includes(upperCaseString) || result.length === 0) return true;

//   return false;
// }

// console.log(detectCapitalUse("USA"));
// console.log(detectCapitalUse("FlaG"));
// console.log(detectCapitalUse("leetcode"));
// console.log(detectCapitalUse("Leetcode"));
// // console.log("Z".charCodeAt());
// =====================================================================================
// Q 4 Count the speical characters |
// You are given a string word. A letter is called special if it appears both in lowercase and uppercase in word.

// Return the number of special letters in word.

// Example 1:

// Input: word = "aaAbcBC"

// Output: 3

// Explanation:

// The special characters in word are 'a', 'b', and 'c'.

// Example 2:

// Input: word = "abc"

// Output: 0

// Explanation:

// No character in word appears in uppercase.

// Example 3:

// Input: word = "abBCab"

// Output: 1

// Explanation:

// The only special character in word is 'b'.
//Brute Approach
function countSpeicalChar(word) {
  let uniqueChar = Array.from(new Set(word)).join("");
  let count = 0;
  for (let i = 0; i < uniqueChar.length; i++) {
    if (
      uniqueChar.includes(uniqueChar[i].toUpperCase()) &&
      uniqueChar.includes(uniqueChar[i].toLowerCase())
    ) {
      count++;
    }
  }
  return count / 2;
}
console.log(countSpeicalChar("aaAbcBC"));
console.log(countSpeicalChar("abc"));
console.log(countSpeicalChar("abBCab"));
console.log(countSpeicalChar("BBbab"));
//another approach
function countSpeicalChar(word) {
  let uniqueChar = Array.from(new Set(word))
    .join("")
    .split("")
    .sort()
    .map((char) => char.charCodeAt());
  console.log(uniqueChar);

  let count = 0;
  for (let i = 0; i < uniqueChar.length; i++) {
    for (let j = i + 1; j < uniqueChar.length; j++) {
      if (Math.abs(uniqueChar[i] - uniqueChar[j]) === 32) {
        count++;
      }
    }
  }
  return count;
}
console.log(countSpeicalChar("aaAbcBC"));
console.log(countSpeicalChar("abc"));
console.log(countSpeicalChar("abBCab"));
console.log(countSpeicalChar("BBbab"));
//both time compexity:O(n**2)

//better Approach
function countSpeicalChar(word) {
  let seen = new Set();
  for (let i = 0; i < word.length; i++) {
    let one = word[i].toLowerCase();
    let two = word[i].toUpperCase();
    if (word.includes(one) && word.includes(two)) {
      seen.add(two);
    }
  }
  return seen.size;
}
console.log(countSpeicalChar("aaAbcBC"));
console.log(countSpeicalChar("abc"));
console.log(countSpeicalChar("abBCab"));
console.log(countSpeicalChar("BBbab"));
// ========================================================================================
