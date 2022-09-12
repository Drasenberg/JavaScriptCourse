// Pure Function
function add(num1, num2) {
  return num1 + num2;
}

// function sendDataToServer() {}

console.log(add(1, 5)); // 6
console.log(add(12, 15)); // 27

// Impure Function
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let prevResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  prevResult = sum; // side-effect
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Coocking'];

function printHobbies(h) {
  h.push('NEW HOBBY');
  console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax * multiplier;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));

let userName = 'Max';

function greetUser() {
  // let name = 'Anna';
  console.log('Hi ' + name);
}

let name = 'Maximilian';

userName = 'Manuel';

greetUser();

// function powerOff(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

function powerOff(x, n) {
  // if (n===1) {
  //   return x;
  // }
  // return x * powerOff(x, n - 1);
  return n === 1 ? x : x * powerOff(x, n - 1);
}

console.log(powerOff(2, 3));

const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        { name: 'Chris', friends: [{ name: 'Harry' }, { name: 'Emilia' }] }
      ]
    },
    { name: 'Julia' }
  ]
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }
  return collectedNames;
}

console.log(getFriendNames(myself));
