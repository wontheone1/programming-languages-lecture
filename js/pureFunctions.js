// pure functions

// Only depends on input arguments (bound variable)
function addition(num1, num2) {
  return num1 + num2;
}

const pi = 3.14; // immutable value
const hundred = 100;

// Depends on input arguments and external immutable value (free variable)
function areaOfCircle(radius) {
  return pi * radius * radius;
}

// still depends on input arguments it's ok that mutation happens
// only inside of the function
function factorial(num) {
  let ret = 1;
  for (i = 1; i < num; i++) {
    ret = i * ret; //mutation, but no visible effect to outside
  }
  return ret;
}

// calls can be replaced with return value and behavior of program won't change
console.log(factorial(5) + " = " + factorial(5));

const fact5 = factorial(5);
console.log(fact5 + " = " + fact5);

// This means if your function takes long to compute, it's better to store return value
// to a variable and use it everywhere. (if used in more than 1 places.).

// since functions doesn't affect each other, always return the same value
// regardless of orders they were called.
console.log(addition(3, 4) + ", " + areaOfCircle(10));
console.log(areaOfCircle(10) + ", " + addition(3, 4));
