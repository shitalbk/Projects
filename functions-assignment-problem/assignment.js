// function sayHello(name) {
//   console.log('Hi ' + name);
// }
// sayHello();


// Task One
const sayHello = (name) => {
  console.log('Hi' + name);
};
sayHello(' Shital');

// Task Two
//With Arguments
const sayHelloOne = (str,name) => {
  console.log(str + name);
};
sayHelloOne('Hi from one' ,' Shital');

//Without Arguments
const sayHelloTwo = () => {
  console.log('Hi from two Shital');
};
sayHelloTwo();

//With returned value
const sayHelloThree = (name) => {
  return 'Hi from three' + name;
};
console.log(sayHelloThree(' Shital'));

//Task Three
//Default Argument

const sayHelloFour = (name = "Shital") => {
  console.log("Hi from four " + name);
};
sayHelloFour();

//Task Four
function checkInput(cb, ...strings){
  let hasEmptyText = false;
  for(const text of strings){
    if(!text){
      hasEmptyText = true;
      break;
    }
  }
  if(!hasEmptyText){
    cb();
  }
}

checkInput(
  () =>{
    console.log('All not empty!');
  },
  'Hello',
  '12',
  'adsfa',
  'Not empty'
);

