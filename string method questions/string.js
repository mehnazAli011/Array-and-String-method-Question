// string method Questions for practice

// Q 1.Write  a  function and reverse the given string.
function reverse(s) {
  return s.split("").reverse().join("");
}
console.log(reverse("hello"));

// ================================================================================

// Q2. write a function and check given string is paliandrome or not.
function isPalindrome(s) {
  return s == s.split("").reverse().join("");
  //   console.log(s,s.split("").reverse().join(""));
}
console.log(isPalindrome("NaN"));
console.log(isPalindrome("hello"));

// ===========================================================================

// Q 3 Write  a function and reverse the word in given string.
function reverseTheWord(sentence) {
  return sentence.split(" ").reverse().join(" ");
}
console.log(reverseTheWord("The quick brown fox"));

// ================================================================================

// Q 4 Write a function check a string is palindrome (ignoring speces and punctuation)
const str = "A man,a plan,a canal,panama";
function check(str) {
  let modifiyStr = str.replace(/[\W|_]/g,"").toLowerCase();
  return modifiyStr == modifiyStr.split("").reverse().join("");
}
console.log(check(str));

// =================================================================================

// Q 5 Write a function and remove all the duplicate form the given string.

function removeDuplicate(s) {
  return Array.from(new Set(s)).join("");
}
console.log(removeDuplicate("programming"));

// ===============================================================================

// Q 6.Write  a function  and count occurrence of the each character in the given string

function count_occur(s) {
  return s
    .replaceAll(" ", "")
    .split("")
    .reduce((wrod, curr) => {
      wrod[curr] = (wrod[curr]++ || 0) + 1;

      return wrod;
    }, {});
}
console.log(count_occur("hello world"));

// ===============================================================================

// Q 7.Write  a function and replace all the space with '%20' in the given string.

function replalceAllSpace(s) {
  return s.replaceAll(" ", "%20");
}
console.log(replalceAllSpace("Mr John Smith"));

// ===============================================================================
// Q 8.write a function and count vowels to the given string.

function countVowels(s) {
  let result = "";
  let vowels = "aioeu";
  for (let elm in s) {
    if (s.includes(vowels[elm])) {
      result += vowels[elm];
    }
  }
  return result.length;
}
console.log(countVowels("hello"));

// ================================================================================

// Q 9 write a  functio and return a first repated character.

function firstRepeatedChar(s) {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] == s[j]) {
        return s[i];
      }
    }
  }
}
console.log(firstRepeatedChar("abca"));

// ================================================================================
//   Q 10. Write a function and convert  the given string in title case.

function titleCase(title) {
  return title
    .split(" ")
    .map((char) => char.at(0).toUpperCase() + char.slice(1))
    .join(" ");
}
console.log(titleCase("a man is so uggly"));
// =============================================================================

// Q 11.Given a string ,write a method to check if it is contains all unique characters.
function uniqueChar(s1){
let s2 = [...new Set(s1)].join("");

return s1.length===s2.length

}
console.log(uniqueChar("abcde"));
console.log(uniqueChar("abbca"));
// ====================================================================
// Q 12.Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

// Example 1:

// Input: nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

function lasgestNumber(nums) {
  if(nums.every(elm=>elm===0)) return "0";
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
console.log(lasgestNumber([0,0,0]));

// ======================================================================
// Valid number
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
