// dynamic program has no problem with this kind of programs
const myFunc = (f) => [f(7), f(true)];

const makePair = (x) => [x, x];

console.log([makePair(7), makePair(true)]);

console.log(myFunc(makePair));
