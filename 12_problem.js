function triangleNumber(ct) {
  let final = 0;
  let tmpCt = 1;

  while (tmpCt <= ct) {
    final += tmpCt;
    tmpCt++;
  }

  return final;
}

function getFactorOfNumber(num) {
  const factors = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }

  // console.log(factors);
  return factors.length;
}

function untillFactorsLimit(factorlimit) {
  let currTriangleNumber = 0;
  let currFactorsCt = 0;
  let numberCt = 0;

  while (factorlimit > currFactorsCt) {
    numberCt++;
    currTriangleNumber = triangleNumber(numberCt);
    currFactorsCt = getFactorOfNumber(currTriangleNumber);
  }

  return currTriangleNumber;
}

console.log(untillFactorsLimit(500));
