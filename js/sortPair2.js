// if already sorted pair is given return a new pair with the same value
const sortPair = (pair) => {
  if (pair[0] > pair[1]) {
    return [pair[1], pair[0]];
  } else {
    return [pair[0], pair[1]];
  }
};

const pair1 = [1, 2];
const pair2 = [2, 1];
const pair1Sorted = sortPair(pair1);
const pair2Sorted = sortPair(pair2);

console.log(pair1, pair1Sorted);
console.log(pair2, pair2Sorted);

// mutate sorted pairs

pair1Sorted[1] = 10;
pair2Sorted[1] = 10;

console.log(pair1, pair1Sorted); // only sorted pair changes
console.log(pair2, pair2Sorted); // only sorted pair changes
