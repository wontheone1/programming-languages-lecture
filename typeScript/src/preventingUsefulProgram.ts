// if we don't allow any type ("noImplicitAny": true), annotating type makes this work.
const myFunc = (f: (arg: number | boolean) => (number | boolean)[]) => [
  f(7),
  f(true),
];

const makePair = (x: number | boolean) => [x, x];

console.log([makePair(7), makePair(true)]);

console.log(myFunc(makePair));
