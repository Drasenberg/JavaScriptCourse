class Course {
  #price;

  get price() {
    return '$' + this.#price;
  }
  set price(value) {
    if(value < 0) {
      throw 'Invalid value';
    }
    this.#price = value;
  }
  constructor(title, length, price) {
    (this.title = title), (this.length = length), (this.price = price);
  }

  lengthForPrice() {
    return `You get ${Math.round(this.#price / this.length)} hours for ${
      this.#price
    }`;
  }
  summary() {
    return `Course ${this.title} is ${this.length} hours length and costs ${this.#price}`;
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }
  publish() {
    console.log('Course was published');
  }
}

const courseOne = new Course('Java Scrpit', 42, 399);
const courseTwo = new Course('React', 52, 399);
const practicalCourse = new PracticalCourse('Another', 88, 399, 12);
const theoreticalCourse = new TheoreticalCourse('One', 64, 64);

//First Task
console.log(courseOne);
console.log(courseTwo);
//Second Task
console.log(courseOne.lengthForPrice());
console.log(courseTwo.lengthForPrice());
console.log(courseOne.summary());
console.log(courseTwo.summary());
//Third Task
console.log(practicalCourse.numOfExercises);
console.log(practicalCourse.lengthForPrice());
console.log(practicalCourse.summary());
theoreticalCourse.publish();
console.log(theoreticalCourse.lengthForPrice());
console.log(theoreticalCourse.summary());
