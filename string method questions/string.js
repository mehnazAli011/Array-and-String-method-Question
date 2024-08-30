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
  let modifiyStr = str.replaceAll(" ", "").replaceAll(",", "").toLowerCase();
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

