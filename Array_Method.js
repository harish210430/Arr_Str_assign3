// Implement the methods given below:
/*
1. You can only use for or for..of loop
2. First write down the steps of how the methods work
3. After writing the steps convert it into code
*/
// Example:

// map

/*
1. Steps
// Map accepts a callback function in our case we need two arguments array and callback.
// The callback function gets access to three things (elm, index, arr).
// call the callback function with each values.
// store the return value in a new array for each element.
// return the new array.

2. Implementation
*/

function map(array, cb){
  let final = [];
  for(let index = 0; index < array.length; index++){
    let element = array[index];
    final.push(cb(element, index, array))
  }
  return final;
}