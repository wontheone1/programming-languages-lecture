[@decco] type numOrbool = Num(int) | Bool(bool);
[@decco] type pairOfPair = ((numOrbool, numOrbool), (numOrbool, numOrbool));

// since type inference thinks f takes int, type error on f(true)
let myFunc = (f) =>  (f(Num(7)), f(Bool(true)));

// take value of any type and returns a pair of it
let makePair = (x) => (x, x);

// makePair should be able to take int or boolean or any type
Js.log(pairOfPair_encode(myFunc(makePair)));
