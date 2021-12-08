class Course{
  #price;
  get price(){
    return '$' + this.#price;
  }
  set price(value){
    if(value < 0){
      throw 'Invalid value';
    }
    this.#price = value;
  }
  constructor(title,length,price){
    this.title = title;
    this.length = length;
    this.price = price;
  }
  calculateLength(){
    return this.length/this.#price;
  }
  
  courseSummary(){
    console.log(`Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`);
  }
}

const subjectOne = new Course("Math",5,9.9);
const subjectTwo = new Course("Science",90,11.0);

console.log(subjectOne.calculateLength());
console.log(subjectTwo.calculateLength());

subjectOne.courseSummary();
subjectTwo.courseSummary();

class PracticalCourse extends Course{
  constructor(title,length,price,exercisesCount){
    super(title,length,price);
    this.numberOfExercises = exercisesCount;
  }
}

const practical = new PracticalCourse('ReactJS',30,19.99,10);
console.log(practical);
practical.courseSummary();

class TheoreticalCourse extends Course{
  publish(){
    console.log('Publishing...');
  }
}

const theoretical = new TheoreticalCourse('AngularJS',40,18.88,20);
theoretical.price = 9000;
theoretical.publish();
theoretical.courseSummary();

