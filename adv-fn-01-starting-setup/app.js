function add(num1, num2) {
  return num1 + num2;
}
console.log(add(3, 5));
console.log(add(6, 9));

function addRandom(num1) {
  return num1 + Math.random();
}
console.log(addRandom(4));

let previousResult = 0;
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}
console.log(addMoreNumbers(1, 5));

const hobbies = ["Sports", "Cooking"];
function printHobbies(h) {
  h.push("NEW HOBBY");
  console.log(h);
}
printHobbies(hobbies);

//Factory Functions
let multiplier = 1.1;

function createTaxCalulator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalulator(0.19);
const calculateIncomeTaxAmount = createTaxCalulator(0.25);

multiplier = 1.2;
console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let userName = 'Max';

function greetUser(){
  // let name = 'Anna';
  console.log('Hi ' + name);
}
let name = 'Maximilian';
userName = 'Manuel';
greetUser();

// Recursion
// function powerOf(x,n){
//   let result = 1;
//   for(i=0;i<n;i++){
//     result *= x;
//   }
//   return result;
// }

function powerOf(x,n){
  // if(n===1){
  //   return x;
  // }
  // return x * powerOf(x,n-1);
  return n === 1 ? x : x * powerOf(x,n-1);
}
console.log(powerOf(2,3));