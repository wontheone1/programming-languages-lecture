function sumOfRange(a, b) {
  let sum = 0;
  for (i = a; i <= b; i++) {
    sum += i; // same with sum = sum + i;
  }
  return sum;
}

console.log(sumOfRange(1, 10));

function sumOfSquares(a, b) {
  let sum = 0;
  for (i = a; i <= b; i++) {
    sum += i * i; // same with sum = sum + i*i;
  }
  return sum;
}

console.log(sumOfSquares(1, 10));

function higherOrderSumOfRange(f, a, b) {
  let sum = 0;
  for (i = a; i <= b; i++) {
    sum += f(i); // same with sum = sum + f(i);
  }
  return sum;
}

console.log(higherOrderSumOfRange((a) => a, 1, 10));

const square = (num) => num * num;
console.log(higherOrderSumOfRange(square, 1, 10));

function cube(num) {
  return num * num * num;
}
console.log(higherOrderSumOfRange(cube, 1, 10));

// higher order functions or higher order methods (? made up name)
// You can think of the object as the first argument of equivalent functions
console.log([1, 2, 3, 4, 5].map((num) => 10 * num)); // multiply all by 10
console.log([1, 2, 3, 4, 5].filter((num) => num % 2 === 0)); // filter non even numbers
console.log([1, 2, 3, 4, 5].reduce((num, acc) => num + acc)); // reduce all to one value by keep adding
