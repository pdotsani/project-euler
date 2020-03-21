function isPrime(num) {
  if (num === 1 || num === 0) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function countingPrimeNumber(ct) {
  let primeCt = 0;
  let numCt = 0;
  const primes = [];

  while (primeCt < ct) {
    if (isPrime(numCt)) {
      primes.push(numCt);
      primeCt++;
    }
    numCt++
  }

  return primes[ct - 1];  
}

console.log(countingPrimeNumber(10001));