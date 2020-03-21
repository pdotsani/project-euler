function isPalindrome(num) {
  const reverse = parseInt(
    num
      .toString()
      .split("")
      .reverse()
      .join("")
  );

  // console.log(`num: ${num}`);
  // console.log(`reverse: ${reverse}`);

  return num === reverse;
}

// console.log(isPalindrome(906609));
// console.log(isPalindrome(1201));

function largestPalindromeProduct() {
  let products = [];

  for (let i = 100; i <= 999; i++) {
    for (let j = 100; j <= 999; j++) {
      products.push(i * j);
    }
  }

  products = products
    .filter(num => isPalindrome(num)).sort((a, b) => b - a);

  return products[0];
}

console.log(largestPalindromeProduct());