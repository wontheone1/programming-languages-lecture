// if we don't allow any type ("noImplicitAny": true), annotating allowed type make this work.
let myFunc = (f: (arg: number | boolean) => (number | boolean)[]) => [
  f(7),
  f(true),
];

let makePair = (x: number | boolean) => [x, x];

console.log([makePair(7), makePair(true)]);

console.log(myFunc(makePair));
