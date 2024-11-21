//Basic Question
//Q 1. converte decimal to binary form.

function inBinaryForm(x) {
  let res = "";
  while (x > 0) {
    if (x % 2 === 1) res += "1";
    else res += "0";
    x = Math.floor(x / 2);
  }
  return res.split("").reverse().join("");
}
console.log(inBinaryForm(12));
console.log(inBinaryForm(13));
console.log(inBinaryForm(6));
console.log(inBinaryForm(7));
//Time complexity:O(log n) because it's always logrithmic base of 2N.

//               <--------------------------------------------------->
//Q 2 Binary form to decimal
//First Approach
function inDecimalForm(x) {
  let length = x.length;
  let num = 0;
  for (let i = x.length - 1; i >= 0; i--) {
    let value = 2 ** Math.abs(length - 1 - i);
    num += x[i] * value;
  }
  return num;
}
console.log(inDecimalForm("1100"));
console.log(inDecimalForm("1101"));

//second Approach
function inDecimalForm(x) {
  let length = x.length;
  let num = 0;
  let p2 = 1;
  for (let i = length - 1; i >= 0; i--) {
    if (x[i] === "1") num += p2;
    p2 = p2 * 2;
  }
  return num;
}
console.log(inDecimalForm("1100"));
console.log(inDecimalForm("1101"));
//Time complexity:O(length)
