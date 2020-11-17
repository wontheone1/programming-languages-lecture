// since type inference thinks f takes int, type error on f(true)
// let myFunc = (f) =>  (f(7), f(true));

// take value of any type and returns a pair of it
let makePair = (x) => (x, x);

// makePair should be able to take int or boolean or any type
Js.log((makePair(7),makePair(true)));
