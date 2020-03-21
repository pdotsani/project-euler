function getPrimeFactors(num) {
  let factors = [];

  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  const primeFactors = factors.filter(factor => {
    for (let i = 2; i < factor; i++) {
      if (factor % i === 0) {
        return false;
      }
    }
    return true;
  });

  console.log(primeFactors);
}

function getPrimeFactorToo(num) {
  let primeFactors = [];

  while (num % 2 === 0) {
    primeFactors.push(2);
    num = num / 2;
  }

  for (let i = 3; i < num; i++) {
    while (num % i === 0) {
      primeFactors.push(i);
      num = num / i;
    }
  }

  if (num > 2) {
    primeFactors.push(num);
  }

  console.log(primeFactors);
}

getPrimeFactors(600851475143);