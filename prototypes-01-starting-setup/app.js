class AgedPerson{
  printAge(){
    console.log(this.age);
  }
}

class Person extends AgedPerson{
  name = 'Shital';
  constructor(){
    super();
    this.age = 27;
  }
  greet(){
    console.log('Hi I am ' + this.name + ' and I am ' + this.age + ' years old');
  }
}

function Person(){
  this.age = 27;
  this.name = 'SHITAL';
  
}

Person.prototype.greet = function(){
  console.log('Hi I am ' + this.name + ' and I am ' + this.age + ' years old');
};

// Person.describe = function(){
//   console.log("Creating persons...");
// }
// Person.prototype = {
//   printAge(){
//     console.log(this.age);
//   }
// };

// Person.prototype.printAge = function(){
//   console.log(this.age);
// };


// console.dir(Person);
// const person = new Person();
// person.greet();
// console.log(person.__proto__);
// const personTwo = new person.__proto__.constructor();
// console.log(personTwo);
// console.dir(Object.prototype);

const p = new Person();
const p2 = new Person();
console.log(p.__proto__ === p2.__proto__);