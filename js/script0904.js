// 1 
// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;

// // Result: ["a", "b", "c", 0, 1, 2, 3];

// const d = [b[0], ...b[1]]; // [1, 2, 3]

// const result = a.concat(c, d);
// console.log(result);


// 2

// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];

// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];

// WAY 1
// const aNew = [...a];
// const b = [a[0], a[1], a[2]];

// aNew.splice(3, 3, ...b);

// console.log(aNew);
// WAY 2
// const b = a.copyWithin(3, 0, 3);
// console.log(b);


// 3

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];

// WAY1

// a.splice(5, 3, 0,0,0);
// console.log(a);

// WAY2

// a.fill(0, 5, 8);

// console.log(a);

// 4

// const a = [1, 2, [3, 4], [5, 6], 7];

// Result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// WAY1

// const b = [];

// for (const element of a) {
  
//   if (Array.isArray(element)) {
//     b.push(...element)
//   } else {
//     b.push(element)
//   };

// }

// console.log(b);


// WAY2

// const b = a.flat(Infinity); // Infinity - это самый нижний уровень вложенности
// console.log(b);

// 5

// Write a function - positiveSum
// It should accept an array of numbers and return a result of their addition. But you must calculate only positive numbers and omit negative if any presents.
// For example:
// positiveSum([2, 4, 6, 8])   // => 20
// positiveSum([0, -3, 5, 7])  // => 12

// WAY1

// function posistiveSum (array) {
//   let sum = 0;
//   for (const el of array) {
//     if (el > 0) {
//       sum += el;
//     };
//   };

//   return sum;
// };

// console.log(posistiveSum([0, -3, 5, 7]));


// WAY2

// function posistiveSum (array) {
//   return array.filter(el => el > 0).reduce((total, el) => total + el, 0);
// };

// console.log(posistiveSum([0, -3, 5, 7]));


// 6

// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// For example:
// letterCount("Maggy", "g") // => 2
// letterCount("Barry", "b") // => 1
// letterCount("", "z")      // => 0


// const letterCount = (string, letter) => {
//   return string.toLowerCase()
//   .split("")
//   .reduce((acc, el) => el === letter.toLowerCase() ? acc += 1 : acc, 0);
// };

// console.log(letterCount("", "z"));

// 7





// Our football team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]

// Write a function – countPoints
// It should accept a collection of football games scores and count the points of our team in the championship.
// Rules for counting points for each match:
// •	if x > y   - 3 points
// •	if x < y   - 0 point
// •	if x = y   - 1 point

// For example:
// countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12


// WAY1

// const countPoints = (array) => {
  
//   return array.reduce((acc, element) => {
//     returnelement[0] > element[2] ? acc += 3 : element[0] < element[2] ? acc : acc +=1;
// }, 0);
// };

// console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']));


// WAY2

// const countPoints = (array) => array.filter(element => element[0] > element[2]).length * 3 + 
// array.filter(element => element[0] === element[2]).length;


// console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']));



// HW

// 8  Используя метод REDUCE сделать новый массив таким образом, 
//чтобы каждый текущий элемент нового массива = сумма текущего элемента старого массива +
//+ все его предыдущие элементы

// getSums([1, 2, 3, 4, 5]) 

// result
// [1, 3, 6, 10, 15]



const getSum = (array) => {
    return array.reduce((acc, el, idx, arr) => {
        acc.push(arr.slice(0, idx).reduce((total, num) => total + num, 0) + el);
        return acc;
    }, []);
};

const a = [1,2,3,4,5];
console.log(getSum(a));







