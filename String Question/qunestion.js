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
//Time complexity:O(n)
// ========================================================================================
//Q 5 maximum number of found in sentance.
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

// Example 1:

// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation:
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
// Example 2:

// Input: sentences = ["please wait", "continue to fight", "continue to win"]
// Output: 3
// Explanation: It is possible that multiple sentences contain the same number of words.
// In this example, the second and third sentences (underlined) have the same number of words.

function mostWordsFound(sentences) {
  let word = 0;
  for (let i = 0; i < sentences.length; i++) {
    word = Math.max(sentences[i].split(" ").length, word);
  }
  return word;
}
console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
console.log(
  mostWordsFound(["please wait", "continue to fight", "continue to win"])
);

function mostWordsFound(sentences) {
  let lenghtOfSentence = sentences.map(
    (sentence) => sentence.split(" ").length
  );
  return Math.max(...lenghtOfSentence);
}

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
console.log(
  mostWordsFound(["please wait", "continue to fight", "continue to win"])
);

// =======================================================================================
//Q Sorting the sentence
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

// Example 1:

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
// Example 2:

// Input: s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// // // Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.
// function sortSentence(s) {
// let arr = s.split(" ");
// for(let i=0;i<arr.length;i++){
//   let temp = arr[0].at(-1)
//   for(let j=1;j<arr.length;j++){
//     if(arr[i].at(-1)>arr[j].at(-1)){
//       temp=arr[j].at(-1);
//     arr[j].at(-1)=arr[i].at(-1);
//     arr[i].at(-1)=temp;
//     }
//   }
// }
// return arr;
// }

// console.log(sortSentence("is2 sentence4 This1 a3"));
// console.log(sortSentence("Myself2 Me1 I4 and3"));

function sortSentence(s) {
  return s
    .split(" ")
    .sort((a, b) => a[a.length - 1] - b[b.length - 1])
    .map((word) => word.slice(0, word.length - 1))
    .join(" ");
}

console.log(sortSentence("is2 sentence4 This1 a3"));
console.log(sortSentence("Myself2 Me1 I4 and3"));
// =======================================================================================
// Q Maximum Number of Balloons

// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:

// Input: text = "nlaebolko"
// Output: 1
// Example 2:

// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0
//Brute Approach
function maxNumberOfBalloons(text) {
  let map = new Map();
  for (let char of text) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let b = map.get("b") || 0;
  let a = map.get("a") || 0;
  let l = (map.get("l") || 0) / 2;
  let o = (map.get("o") || 0) / 2;
  let n = map.get("n") || 0;

  return Math.floor(Math.min(b, a, l, o, n));
}
console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));
console.log(maxNumberOfBalloons("leetcode"));
console.log(maxNumberOfBalloons("balon"));

//other Approach
function maxNumberOfBalloons(text) {
  let map = { b: 0, a: 0, l: 0, o: 0, n: 0 };
  for (let i = 0; i < text.length; i++) {
    if (map[text[i]] !== undefined) {
      map[text[i]]++;
    }
  }
  return Math.min(
    map["b"],
    map["a"],
    Math.floor(map["l"] / 2),
    Math.floor(map["o"] / 2),
    map["n"]
  );
}
console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));
console.log(maxNumberOfBalloons("leetcode"));
console.log(maxNumberOfBalloons("balon"));

//Optimal Approach
function maxNumberOfBalloons(text) {
  let balloon = new Map();
  let characters = "balon";
  let regex = /[balon]/;

  for (let i = 0; i < characters.length; i++) {
    balloon.set(characters[i], 0);
  }
  for (let i = 0; i < text.length; i++) {
    if (text[i].match(regex)) {
      balloon.set(text[i], balloon.get(text[i]) + 1);
    }
  }

  balloon.set("o", Math.floor(balloon.get("o") / 2));
  balloon.set("l", Math.floor(balloon.get("l") / 2));

  return Math.min(...balloon.values()) || 0;
}
console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));
console.log(maxNumberOfBalloons("leetcode"));
console.log(maxNumberOfBalloons("balon"));
//Time compliexity:O(n**2)

// <---------------------------------------------------------------->
