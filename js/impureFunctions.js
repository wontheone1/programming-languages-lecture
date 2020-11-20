// impure functions

let counter1 = 0;
let counter2 = 100;

// depends on mutable variable outside of function (free variable)
// also have a visible effect outside of function (console.log call)
function checkCounter1() {
  console.log(counter1);
}

// depends on mutable variable outside of function and also mutates it
function count() {
  counter1++; // same as counter1 = counter1 + 1;
  return counter1;
}

// Now the order of function call matters. Because of assignments.
// Assignment introduces concept of time (before / after) to a program
checkCounter1();
count();

// also you cannot freely replace function calls with return value
console.log(count(), count());

const counterAfterCount = count();
console.log(counterAfterCount, counterAfterCount);

// this means you have to be careful refactoring function calls with return values
// so that program behavior doesn't break
