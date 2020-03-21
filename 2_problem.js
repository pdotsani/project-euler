function fibonacci(num) {
  let a = 1,
  b = 0,
  temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

let i = 0;
let values = [];

while (fibonacci(i) < 4000000) {
  let val = fibonacci(i);
  if (val % 2 === 0) {
    values.push(val);
  }
  i++;
}

console.log(values);
console.log(values.reduce((a, b) => a + b));