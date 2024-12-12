let persons = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' },
    { name: 'John', grade: 17, sex: 'M' },
    { name: 'Arya', grade: 14, sex: 'F' },
  ];
  
  // NOTE: Use reduce method whereever you can to solve this exercise:
  
  // Find the average grade.
  let totalGrades = persons.reduce((acc, person) => {
        return acc + person.grade;
  }, 0);
  console.log(`the average of grades is: ${totalGrades/persons.length}`);

  // Find the average grade of male.
  let totalMale = persons.filter(person => person.sex === 'M');

  let totalMaleGrades = persons.reduce((acc, person) => {
      if(person.sex === 'M') {
        return acc + person.grade;
      }
      return acc;
  }, 0);
  console.log(`the avg of male grades is: ${totalMaleGrades/totalMale.length}`);

  // Find the average grade of female.
  let totalFemale = persons.filter(person => person.sex === 'F');

  let totalFemaleGrades = persons.filter(person => person.sex === 'F').reduce((acc, person) => {
    return acc + person.grade;
  }, 0);
  console.log(`the avg of female grades is: ${totalFemaleGrades/totalFemale.length}`);

  // Find the highest grade.
  let highestGrade = persons.map(person => person.grade).sort((a,b) => b-a);
  console.log(`highest grade is: ${highestGrade[0]}`);

  // Find the highest grade for people whose name starts with 'J' or 'P'.
  let nameStartWithJP = persons.filter(person => person.name.startsWith('J') || person.name.startsWith('P')).map(person => person.grade).sort((a,b) => b-a);
  console.log(nameStartWithJP);
  console.log(`highest grade for people whose name starts with 'J' or 'P':  ${nameStartWithJP}`);


  // 2.
  const fruitBasket = [
    'banana',
    'cherry',
    'orange',
    'apple',
    'cherry',
    'orange',
    'apple',
    'banana',
    'cherry',
    'orange',
    'fig',
  ];
  
  /* 
  
  Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
  that fruit has appeared in the array. Store it in new variable fruitsObj
  
  Output: 
  {banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
  */

//  let fruits = {banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1};
//   for(let key in fruits) {
//     console.log(fruits["fig"]);
//   }

let fruitsObj = fruitBasket.reduce((acc, fruit) => {
  if(acc[fruit]) {
    acc[fruit] = acc[fruit] + 1;
  } else {
    acc[fruit] = 1;
  }
 return acc;

}, {});
console.log(fruitsObj);


/* 
Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

let fruitArr = Object.keys(fruitsObj).reduce((acc, fruit) => {
  acc = acc.concat([[fruit, fruitsObj[fruit]]]);
  return acc;
}, [])
console.log(fruitArr);

// 3.

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array.
let flatdataArr = data.reduce((acc, val) => {
  acc = acc.concat(val);
  return acc;
}, []);
console.log(flatdataArr);

// 4. 
const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
let flatdataTwoArr = dataTwo.reduce((acc, val) => {
  acc = acc.concat(val.flat());
  return acc;
}, []);
console.log(flatdataTwoArr);

/*
Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/
let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

function increment(num) {
  return num+1;
}
function double(num) {
  return num*2;
}
function decrement(num) {
  return num-1;
}
function triple(num) {
  return num*3;
}
function half(num) {
  return Math.round(num/2);
}

// 5.

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/
let finalResult = pipeline.reduce((acc, func) => {
  acc = func(acc);
  return acc;
}, 3);
console.log(finalResult);

// 6.
let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8.
let finalResult2 = pipeline2.reduce((acc, func) => {
  acc = func(acc);
  return acc;
}, 8);
console.log(finalResult2);
