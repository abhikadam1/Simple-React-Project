let no = "512126t6032";

if (no % 2 !== 0) {
  console.log(no);
  return;
}
let singleOddDigit = 0;
let multipleOddDigit = "";
let tempMultipleOddDigit = "";
for(let i = str.length - 1;  i >= 0; i--) {
    if (str[i] % 2) {

    }


}
for (const element of str) {
  tempMultipleOddDigit += element;
  if (element % 2) {
    if (singleOddDigit < element) singleOddDigit = element;
    multipleOddDigit = tempMultipleOddDigit;
    //    console.log(`${multipleOddDigit} , ${element}`, " j");
  }
}
console.log(singleOddDigit, multipleOddDigit, tempMultipleOddDigit);
