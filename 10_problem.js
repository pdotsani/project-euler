function summationOfPrimes() {
    console.time("sumattion of primes");
    const primeNumbers = [];
    
    for(let i = 1; i < 2000000; i++) {
        if(isPrime(i)) {
            console.log(i);
            primeNumbers.push(i);
        }
    }
    
    console.log(primeNumbers);
    console.log(primeNumbers.reduce((a,b) => a + b));
    console.timeEnd("sumattion of primes");
}

const isPrime = (num) => {
    if(num === 1) {
        return false;
    }
    
    if(num === 2) {
        return true;
    }
    
    for(let i = 2; i <= Math.floor(num/2); i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

summationOfPrimes();