const returned = true ? "moi moi" : 777;

console.log(returned);

// works for string or number
const double = (arg) => arg + arg;

console.log(double(5));
console.log(double("doubled"));

// const double = (arg) => {
//   if (typeof arg === "string" || typeof arg === "number") {
//     return arg + arg;
//   }
//   if (Array.isArray(arg)) {
//     return [...arg, ...arg];
//   } else {
//     return [arg, arg];
//   }
// };

// console.log(double(5));
// console.log(double("doubled"));
// console.log(double([1, 2, 3]));
// console.log(double({ a: 33 }));
