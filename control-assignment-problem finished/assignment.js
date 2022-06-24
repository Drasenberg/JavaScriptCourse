const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// TASK 1
if (randomNumber > 0.7) {
  alert('It`s a special number');
}
// TASK 2
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i > arrNum.length; i++) {
  console.log(arrNum[i]);
}

for (const num of arrNum) {
  console.log(num);
}

// TASK 3
for (let i = arrNum.length - 1; i >= 0; i--) {
  console.log(arrNum[i]);
}

// TASK 4
const rndNum = Math.random();

if (rndNum > 0.7 && randomNumber > 0.7) {
  alert('Two of them is greater then 0.7');
}
if (rndNum < 0.2 || randomNumber < 0.2) {
  alert('Too small number :)');
}
