const returned = true ? "moi moi" : 777;

console.log(returned);

// works for string or number
const double = (arg) => arg + arg;

console.log(double(5));
console.log(double("doubled"));
