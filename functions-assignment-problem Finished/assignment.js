// function sayHello(name) {
//   console.log('Hi ' + name);
// }

// sayHello();


// First task

const sayHello = (name) => console.log('Hi ' + name);

sayHello('Max');

// Second Task

const sayHello_1 = (phrase1, phrase2) => console.log(phrase1 + ' ' + phrase2);

sayHello_1('Hi', 'Max');

const sayHello_2 = () =>  console.log('Hi Hardcode');

sayHello_2();

const sayHello_3 = (name) => 'Hi ' + name;

console.log(sayHello_3('Max'));

// Third Task

const sayHelloFb = (name = 'Max') => console.log('Hi ' + name);

sayHelloFb();

// Fourth Task

const checkInput = (cb, ...strings) => {
  let hasEmptyStrings = false;
  for (const string of strings) {
    if(!string){
      hasEmptyStrings = true;
      break;
    }
  }
  if(!hasEmptyStrings){
    cb();
  }
};

checkInput(() => {
  console.log("No Empty Strings!");
}, 'max', 'as');