class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person {
  name = 'Max';

  constructor() {
    // super();
    this.age = 30;
    // this.greet = function() { ... }
  }

  greet = () => {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old'
    );
  };

  // greet = function() {
  //   console.log(
  //     'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old'
  //   );
  // }

  // greet() {
  //   console.log(
  //     'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old'
  //   );
  // }
}

// function Person() {
//   this.age = 30;
//   this.name = 'Max';
// }

// Person.prototype.greet = function () {
//   console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old');
// };

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// }

// Person.prototype.printAge = function () {
//   console.log(this.age);
// }

// console.dir(Person)

// const p = new Person();
// p.greet();
// p.printAge();

// console.log(p.length);
// console.log(p.toString());

// const p2 = new p.__proto__.constructor();
// console.dir(Object.prototype);

// const p = new Person();
// const p2 = new Person();
// console.log(p);

// const button = document.getElementById('btn');

// button.addEventListener('click', p.greet);

const course = {
  title: 'JavaScript - The Complete Guide',
  rating: 5
};

// console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  }
});

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    }
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: 'Max',
      writable: true
    }
  }
);

// student.name = 'Max';

Object.defineProperty(student, 'progress', {
  configurable: true,
  enumeraable: true,
  value: 0.8,
  writable: false
});

course.printRating();

console.log(student);
