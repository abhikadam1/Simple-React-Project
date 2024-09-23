let str = "5121266032";
let no = Number(str);
console.log(no);

if (no % 2 !== 0) {
    
//   console.log(no);
  return;
}
let singleOddDigit = 0;
let multipleOddDigit = "";
let tempMultipleOddDigit = "";
for (const element of str) {
  tempMultipleOddDigit += element;
  if (element % 2) {
    if (singleOddDigit < element) singleOddDigit = element;
    multipleOddDigit = tempMultipleOddDigit;
       console.log(`${multipleOddDigit} , ${element}`, " j");

  }
}
console.log(singleOddDigit, multipleOddDigit, tempMultipleOddDigit);
