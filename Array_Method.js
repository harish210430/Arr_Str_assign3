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
// A function that accept a cbfn is known as HOF(Higher Order Function).
let array = [10, 20, 43, 56, 76, 89, 90];

function map(array, cb){
  let final = [];
  for(let index = 0; index < array.length; index++){
    let element = array[index];
    final.push(cb(element, index, array));
  }
  return final;
}


// forEach: 

/* 
Steps:
1. Accept a cbfn that gives u to access three things (elmt, idx, arr), In our case there are two parameters.
2. call the cbfn with three values(elmt, idx, arr) for each element.
3. return undefined.
4. idx, arr : two optional values.
*/

// Implement:

let forEach = (arr, cbfn) => {
  for(let i = 0; i < arr.length; i++) {
    let elm = arr[i];
    cbfn(elm, i, arr);
  }
}


// map: 
/*
Steps: 
1. accept a cbfn and arr as parameter.
2. call the cbfn with three values(elm, idx, arr) for each elements.
3. it creates a new Array and store the vlaues for each element.
4. return a same size of Array.
*/

// Implement:
let final = [];
function map(arr, cbfn) {
  for(let i=0; i<arr.length; i++) {
    final.push(cbfn(arr[i], i, arr));  
    // let elmt = arr[i];
    // final.push(cbfn(elmt, i, arr));
  }
  return final;
}


// filter:

/*
Steps:
1. accept array and a cbfn as parameter.
2. call the cbfn with three values(elm, i, arr) for each values.
3. find the matched values which match the given condition and return them(only truthy values).
4. filter only understand true and false(Boolean valuees).
5. Return the same or less size new Array.
*/

// Implementation:
let finalArr = [];
function filter(arr, cbfn) {
  for(let i=0; i<arr.length; i++) {
    let elm = arr[i];
    if(cbfn(elm, i, arr))
    finalArr.push(elm);
}
return finalArr;
}


// reduce:
/*
Steps:
1. it reduce collection of values into a single value Or diff shape of value.
2. accept three parameter array and a cbfn also accept intl_val.
3. call the cbfn with 4 values(acc, elm, i, arr) for Each value.
4. acc = intl_val
5. In starting intl_val assign to the acc And intl_val, what we initialize.
6. whatEver cbfn return becomes the next value for acc. 
*/

// Implement:

function reduce(arr, cbfn, initial_val) {
  let acc = initial_val;
  for(let i=0; i<arr.length; i++) {
    acc = cbfn(arr[i], acc, i, arr);
  }
  return acc;
}


// find:

/*
Steps:
1. accept array and a cbfn as parameter.
2. call the cbfn with three values(elm, i, arr) for each values.
3. find the 1st matched value which match the given condition, If it returns true return the element.
4. Return only one value.
*/

// Implementation:

function find(arr, cbfn) {
  for(let i=0; i<arr.length; i++) {
    if(cbfn(arr[i], i, arr))
    return arr[i];
  }
}
// console.log(find(array, (num) => num > 22));