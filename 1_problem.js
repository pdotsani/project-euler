let multiples = [];

for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    multiples.push(i);
  }
}

console.log(multiples);
console.log(multiples.reduce((a, b) => a + b));