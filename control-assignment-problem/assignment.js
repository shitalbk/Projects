const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

//Task 1
if(randomNumber > 0.7){
  alert('The number is greater than 0.7!!!');
}

//Task 2
const array = [1,3,5,6];
// For-of loop
for(const arr of array){
  console.log(arr);
}

for(let i=0;i<array.length;i++){
  console.log(array[i]);
}

//Task 3
for(let i=array.length - 1;i>=0;i--){
  console.log(array[i]);
}

//Task 4
const randomNumberTwo = Math.random();
if((randomNumber && randomNumberTwo) > 0.7){
  alert('Numbers are greater than 0.7');
}
else if((randomNumber || randomNumberTwo) < 0.2){
  alert('One of the two numbers is not greater than 0.2');
}
