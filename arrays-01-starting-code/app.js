// const numbers = [1,2,3];
// console.log(numbers);


// const moreNumbers = new Array();  //[] gives empty array
// const moreNumbers = new Array('Hi!', 'Welcome!'); // prints the string
//const moreNumbers = new Array(1,5); // creates array with these two numbers
//const moreNumbers = new Array(5); // creates array with length 5
// console.log(moreNumbers);

// const moreNumbers1 = Array(5,2);
// console.log(moreNumbers1);

// const yetMoreNumbers = Array.of(1,2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking','Sports'];
// const personalData = [30,'Max',{moreDetail: []}];

// const analyticsData = [[1,1.6],[-5.4,2.1]];

// for(const data of analyticsData){
//   for(const dataPoint of data){
//     console.log(dataPoint);
//   }
// }

// const hobbies = ['Sports','Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const popValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);
// hobbies[1] = 'Coding';
// hobbies[5] = 'Reading';
// console.log(hobbies,hobbies[5]);

// hobbies.splice(1,0,'Good Food');
// console.log(hobbies);

// hobbies.splice(0,1);
// console.log(hobbies);

// const removedElements = hobbies.splice(-2,1);
// console.log(hobbies);

// const tempResults = [1,5.3,1.5,10.99,-5,1.5,10];
// const storedResults = tempResults.concat([3.2,2.2]);
//const storedResults = tempResults.slice(2);
//const storedResults = tempResults.slice(-3,-2);

// tempResults.push(0.31);
// console.log(storedResults,tempResults);
// console.log(tempResults.indexOf(10));
// console.log(tempResults.lastIndexOf(1.5));

// console.log(tempResults.includes(100));

// const personData = [{name: 'Max'},{name:'Shi'},{name: 'Manuel'},{name: 'Shital'}];
// console.log(personData.indexOf({name: 'Shi'}));

// const manuel = personData.find((person, idx, persons) => {
//    return person.name === 'Manuel';
// });

// manuel.name = 'Anna';
// console.log(manuel,personData);

// const maxIndex = personData.findIndex((person, idx , persons) => {
//   return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99,12.4,13.9,6.58];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for(const price of prices)
// // {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//     const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
//     taxAdjustedPrices.push(priceObj);

// });
// console.log(taxAdjustedPrices);


const prices = [10.99,12.4,13.9,6.58];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
    return priceObj;

});
//console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a,b) => {
    if(a > b){
        return 1;
    } else if(a === b){
        return 0;
    }else {
        return -1;
    }
});
console.log(sortedPrices.reverse());

const filterArray  = prices.filter(p =>  p > 12);

console.log(filterArray);

// let sum = 0;
// prices.forEach((price) => {
//     sum += price;
// });
// console.log(sum);

const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {

});