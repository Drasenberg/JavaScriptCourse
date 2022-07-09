// First Task
const numArr = [1, 34, 5, 67, 8, 3];

const filteredNumArr = numArr
  .filter((num) => num > 5)
  .map((num) => ({ num: num }));
const multiplicatianOfNumArr = numArr.reduce(((prev, curr) => prev * curr), 1);
console.log(filteredNumArr);
console.log(multiplicatianOfNumArr);

// Second Task & Third Task
const findMax = (arr) => {
  let minAndMax = []
  minAndMax.push(Math.max(...arr));
  minAndMax.push(Math.min(...arr));
  return minAndMax;
}

const [max, min] = findMax(numArr);
console.log(max, min);

// Foruth Task
const userIds = new Set();
userIds.add(10)
userIds.add(-5)
userIds.add(-5)

console.log(userIds);