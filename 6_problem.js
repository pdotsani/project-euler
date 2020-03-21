function sumOfSquares(ct) {
  let result = 0;

  for (let i = 1; i <= ct; i++) {
    result += Math.pow(i, 2);
  }

  return result;
}

function squareOfTheSum(num) {
  let base = 0;

  for (let i = 1; i <= num; i++) {
    base += i;
  }

  return Math.pow(base, 2);
}

console.log(squareOfTheSum(100) - sumOfSquares(100));