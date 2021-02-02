// function doubleIt(num) {
//   return num * 2;
// }

// const doubleIt = function myFunction(num) {
//   return num * 2;
// };

// const doubleIt = (num) => num * 2;

// const result = doubleIt(50);
// console.log(result);

// const add = (x, y) => x + y;

// const result = add(50, 70);
// console.log(result);

// const give5 = () => 5;

// const result = give5();
// console.log(result);

const doMach = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
};
const result = doMach(7, 5);
console.log(result);
