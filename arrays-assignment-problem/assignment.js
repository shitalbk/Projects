// First Solution

// Creating Array
const prices = [2, 4.5, 3.7, 5, 6.1, 22.1];
// Filter Array
const filterArray = prices.filter((price, idx, prices)=> {
  return price > 5;
});
console.log(filterArray);

// Mapping every number to an object
const mapArray = prices.map((price, idx, prices)=> {
    const mapObj = { index: idx, price: price };
    return mapObj;
});
console.log(mapArray);

// Reducing the array 
const reduceArray = prices.reduce((previousValue, currentValue, curIndex, prices) =>{
  return previousValue * currentValue;
});
console.log(reduceArray);

// Second Solution
function findMax(...nums){
  let curMax = nums[0];
  for(const num of nums){
    if(num > curMax){
      curMax = num;
    }
  }
  return curMax;
}
console.log(findMax(...prices));

// Third Solution
function findNum(...nums){
  let curMax = nums[0];
  let curMin = nums[0];
  for(const num of nums){
    if(num > curMax){
      curMax = num;
    }
    if(num < curMin){
      curMin = num;
    }
  }
  return [curMax, curMin];
}
const [max, min] = findNum(...prices);
console.log(max,min);

// Fourth Solution
const list = new Set();
list.add(10);
list.add(10);
list.add(1);
console.log(list);
