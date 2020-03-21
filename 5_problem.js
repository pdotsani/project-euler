function dividedByOneThruTwenty(num) {
  for (let i = 1; i <= 20; i++) {
    if (num % i !== 0) {
      return false;
    }
  }

  return true;
}

function smallestNumberDivisible() {
  let i = 1;
  
  while (!dividedByOneThruTwenty(i)) {
    i++;
  }

  return i;
}

console.log(smallestNumberDivisible());