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
//Q Greatest English Letter in upper and lower Case

// Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.

// An English letter b is greater than another letter a if b appears after a in the English alphabet.

// Example 1:

// Input: s = "lEeTcOdE"
// Output: "E"
// Explanation:
// The letter 'E' is the only letter to appear in both lower and upper case.
// Example 2:

// Input: s = "arRAzFif"
// Output: "R"
// Explanation:
// The letter 'R' is the greatest letter to appear in both lower and upper case.
// Note that 'A' and 'F' also appear in both lower and upper case, but 'R' is greater than 'F' or 'A'.

//Brute Approach
function upperAndLowerCaseLetter(s) {
  let store = [];
  for (let i = 0; i < s.length; i++) {
    if (s.includes(s[i].toUpperCase()) && s.includes(s[i].toLowerCase())) {
      store.push(s[i].toUpperCase().charCodeAt());
    }
  }
  return store.length === 0 ? "" : String.fromCharCode(Math.max(...store));
}
console.log(upperAndLowerCaseLetter("lEeTcOdE"));
console.log(upperAndLowerCaseLetter("arRAzFif"));
console.log(upperAndLowerCaseLetter("AbCdEfGhIjK"));

//           <---------------------------------------------------------------->
//Q.count special character || (pending)
// You are given a string word. A letter c is called special if it appears both in lowercase and uppercase in word, and every lowercase occurrence of c appears before the first uppercase occurrence of c.

// Return the number of special letters in word.

// Example 1:

// Input: word = "aaAbcBC"

// Output: 3

// Explanation:

// The special characters are 'a', 'b', and 'c'.

// Example 2:

// Input: word = "abc"

function speicalChar(word) {
  let uniqueChar = Array.from(new Set(word)).join("");
  console.log(uniqueChar);

  let result = "";

  for (let i = 0; i < uniqueChar.length; i++) {
    if (
      uniqueChar.includes(uniqueChar[i].toUpperCase()) &&
      uniqueChar.includes(uniqueChar[i].toLowerCase())
    ) {
      result += uniqueChar[i];
    }
  }
  return result.length / 2;
}
console.log(speicalChar("aaAbcBC"));
console.log(speicalChar("abc"));
console.log(speicalChar("AbBCab"));
console.log(speicalChar("beE"));

//           <---------------------------------------------------------------->
// Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

// Example 1:

// Input: s = "aaabbb"
// Output: true
// Explanation:
// The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
// Hence, every 'a' appears before every 'b' and we return true.
// Example 2:

// Input: s = "abab"
// Output: false
// Explanation:
// There is an 'a' at index 2 and a 'b' at index 1.
// Hence, not every 'a' appears before every 'b' and we return false.
// Example 3:

// Input: s = "bbb"
// Output: true
// Explanation:
// There are no 'a's, hence, every 'a' appears before every 'b' and we return true.

function checkString(s) {
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] === "b" && s[i + 1] === "a") ||
      (s[i] === "B" && s[i + 1] === "A") ||
      (s[i] === "b" && s[i + 1] === "A") ||
      (s[i] === "B" && s[i + 1] === "a")
    ) {
      return false;
    }
  }
  return true;
}
console.log(checkString("aaabbb"));
console.log(checkString("abab"));
console.log(checkString("bbb"));
console.log(checkString("aaa"));
console.log(checkString("AB"));
console.log(checkString("bA"));

//           <---------------------------------------------------------------->
//Q Capitalize the Title
// You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.

// Example 1:

// Input: title = "capiTalIze tHe titLe"
// Output: "Capitalize The Title"
// Explanation:
// Since all the words have a length of at least 3, the first letter of each word is uppercase, and the remaining letters are lowercase.
// Example 2:

// Input: title = "First leTTeR of EACH Word"
// Output: "First Letter of Each Word"
// Explanation:
// The word "of" has length 2, so it is all lowercase.
// The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.
// Example 3:

// Input: title = "i lOve leetcode"
// Output: "i Love Leetcode"
// Explanation:
// The word "i" has length 1, so it is lowercase.
// The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.

function capitalizeTitle(title) {
  let result = [];
  let arr = title.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 3) {
      result[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    } else {
      result[i] = arr[i].toLowerCase();
    }
  }
  return result.join(" ");
}
console.log(capitalizeTitle("capiTalIze tHe titLe"));
console.log(capitalizeTitle("First leTTeR of EACH Word"));
console.log(capitalizeTitle("i lOve leetcode"));

//with method
function capitalizeTitle(title) {
  return title
    .split(" ")
    .map((item) =>
      item.length <= 2
        ? item.toLowerCase()
        : `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
    )
    .join(" ");
}
console.log(capitalizeTitle("capiTalIze tHe titLe"));
console.log(capitalizeTitle("First leTTeR of EACH Word"));
console.log(capitalizeTitle("i lOve leetcode"));
//  <------------------------------------------------------->

// Reverse String |||
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"

//Brute Approach
function reverseStr(s) {
  let arr = s.split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").reverse().join("");
  }
  return arr.join(" ");
}
console.log(reverseStr("Let's take LeetCode contest"));
console.log(reverseStr("Mr Ding"));
//Time complexity:O(n)

function reverseStr(s) {
  return s
    .split(" ")
    .map((char) => char.split("").reverse().join(""))
    .join(" ");
}
console.log(reverseStr("Let's take LeetCode contest"));
console.log(reverseStr("s'teL ekat edoCteeL tsetnoc"));

//              <--------------------------------------->

//Q Detect capital

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

//Brute Approach
function detectCapitalUse(word) {
  const firstLetter = word[0]; // Get the first letter
  const restOfWord = word.slice(1); // Get the rest of the word

  // Check if all letters are uppercase
  const allUppercase = word === word.toUpperCase();
  // Check if all letters are lowercase
  const allLowercase = word === word.toLowerCase();
  // Check if the first letter is uppercase and the rest are lowercase
  const firstUpperRestLowercase =
    firstLetter === firstLetter.toUpperCase() &&
    restOfWord === restOfWord.toLowerCase();

  // Return true if any of the conditions for valid capitalization are met
  return allUppercase || allLowercase || firstUpperRestLowercase;
}
console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("FlaG"));
//time complexity:O(n)
//      <------------------------------------------------>
//Q circlar sentance

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// For example, "Hello World", "HELLO", "hello world hello world" are all sentences.
// Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.

// A sentence is circular if:

// The last character of a word is equal to the first character of the next word.
// The last character of the last word is equal to the first character of the first word.
// For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. However, "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.

// Given a string sentence, return true if it is circular. Otherwise, return false.

// Example 1:

// Input: sentence = "leetcode exercises sound delightful"
// Output: true
// Explanation: The words in sentence are ["leetcode", "exercises", "sound", "delightful"].
// - leetcode's last character is equal to exercises's first character.
// - exercises's last character is equal to sound's first character.
// - sound's last character is equal to delightful's first character.
// - delightful's last character is equal to leetcode's first character.
// The sentence is circular.
// Example 2:

// Input: sentence = "eetcode"
// Output: true
// Explanation: The words in sentence are ["eetcode"].
// - eetcode's last character is equal to eetcode's first character.
// The sentence is circular.
// Example 3:

// Input: sentence = "Leetcode is cool"
// Output: false
// Explanation: The words in sentence are ["Leetcode", "is", "cool"].
// - Leetcode's last character is not equal to is's first character.
// The sentence is not circular.

function isCircularSentence(sentence) {
  let array = sentence.split(" ");

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i].at(-1).toLowerCase() !== array[i + 1][0].toLowerCase()) {
      return false;
    }
  }

  if (array[array.length - 1].at(-1) !== array[0][0]) {
    return false;
  }

  return true;
}
console.log(isCircularSentence("leetcode exercises sound delightful"));
console.log(isCircularSentence("eetcode"));
console.log(isCircularSentence("Leetcode is cool"));
console.log(isCircularSentence("Leetcode eisc cool"));

//            <--------------------------------------------------->
//Q Reverse the prefix of word

// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

// Example 1:

// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
// Example 2:

// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"
// Explanation: The first and only occurrence of "z" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
// Example 3:

// Input: word = "abcd", ch = "z"
// Output: "abcd"
// Explanation: "z" does not exist in word.
// You should not do any reverse operation, the resulting string is "abcd".

function reversePrefix(word, ch) {
  let res = "";
  if (!word.includes(ch)) {
    return word;
  }
  let index = word.indexOf(ch);
  for (let i = index; i >= 0; i--) {
    res += word[i];
  }
  return res + word.slice(index + 1);
}
console.log(reversePrefix("abcdefd", "d"));
console.log(reversePrefix("xyxzxe", "z"));
console.log(reversePrefix("abcd", "z"));
//time complexity:O(n)

function reversePrefix(word, ch) {
  let index = word.indexOf(ch);
  return (
    word
      .slice(0, index + 1)
      .split("")
      .reverse()
      .join("") + word.slice(index + 1)
  );
}
console.log(reversePrefix("abcdefd", "d"));
console.log(reversePrefix("xyxzxe", "z"));
console.log(reversePrefix("abcd", "z"));

//  <----------------------------------------------------->
//Q Chek if a string is an Acronym of word
// Given an array of strings words and a string s, determine if s is an acronym of words.

// The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].

// Return true if s is an acronym of words, and false otherwise.

// Example 1:

// Input: words = ["alice","bob","charlie"], s = "abc"
// Output: true
// Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym.
// Example 2:

// Input: words = ["an","apple"], s = "a"
// Output: false
// Explanation: The first character in the words "an" and "apple" are 'a' and 'a', respectively.
// The acronym formed by concatenating these characters is "aa".
// Hence, s = "a" is not the acronym.
// Example 3:

// Input: words = ["never","gonna","give","up","on","you"], s = "ngguoy"
// Output: true
// Explanation: By concatenating the first character of the words in the array, we get the string "ngguoy".
// Hence, s = "ngguoy" is the acronym.

function isAcronym(words, s) {
  let firstWord = "";
  for (let i = 0; i < words.length; i++) {
    firstWord += words[i][0];
  }
  return firstWord === s;
}
console.log(isAcronym(["alice", "bob", "charlie"], "abc"));
console.log(isAcronym(["an", "apple"], "a"));
console.log(isAcronym(["never", "gonna", "give", "up", "on", "you"], "ngguoy"));

//                    <------------------------------------------------->

//Q Robot Return to Origin
// There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

// Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

// Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

// Example 1:

// Input: moves = "UD"
// Output: true
// Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
// Example 2:

// Input: moves = "LL"
// Output: false
// Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.

function finishAllMove(moves) {
  let x = 0;
  let y = 0;
  for (let move of moves) {
    if ("U" === move) y++;
    if ("D" === move) y--;
    if ("R" === move) x++;
    if ("L" === move) x--;
  }
  return x === 0 && y === 0;
}
console.log(finishAllMove("UD"));
console.log(finishAllMove("LL"));
// //time complexity:O(n)

// function canBeEqual(s1, s2) {
//   let count = 0;
//   let arr1 = s1.split("");
//   let arr2 = s2.split("");
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(canBeEqual("abcd", "cdab"));
// console.log(canBeEqual("abcd", "dacb"));

//               <------------------------------------------------->

// Q Remove Trailing Zero From a string
// Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

// Example 1:

// Input: num = "51230100"
// Output: "512301"
// Explanation: Integer "51230100" has 2 trailing zeros, we remove them and return integer "512301".
// Example 2:

// Input: num = "123"
// Output: "123"
// Explanation: Integer "123" has no trailing zeros, we return integer "123".

function removeTrailingZeros(num) {
  let index = num
    .split("")
    .reverse()
    .findIndex((elm) => elm !== "0");
  if (index === -1) return num;
  return num.slice(0, num.length - index);
}
console.log(removeTrailingZeros("51230100"));
console.log(removeTrailingZeros("123"));
console.log(removeTrailingZeros("1720865079269529096765717822459"));

function removeTrailingZeros(num) {
  return num.replace(/0+$/, "");
}
console.log(removeTrailingZeros("51230100"));
console.log(removeTrailingZeros("123"));
console.log(removeTrailingZeros("1720865079269529096765717822459"));

//                <------------------------------------------------->

