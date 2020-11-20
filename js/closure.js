function getClosure() {
  const text = "variable 1";
  return function () {
    return text;
  };
}

const closure = getClosure();
console.log(closure()); // 'variable 1'

const composeFunction = (f, g) => {
  return (x) => f(g(x));
};

function multiply10(num) {
  return 10 * num;
}

function square(num) {
  return num * num;
}

const multiplyAndSquare = composeFunction(square, multiply10);

const squareAndMultiply = composeFunction(multiply10, square);

console.log(multiplyAndSquare(1));
console.log(squareAndMultiply(1));
