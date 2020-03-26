function collatzSequence(num) {
  if (num % 2 === 0) {
    return evenSequence(num);
  } else {
    return oddSequence(num);
  }
}

const evenSequence = num => num / 2;
const oddSequence = num => (num * 3 + 1);

function runCollatzSequence(num) {
  let chain = [];
  while (num !== 1) {
    num = collatzSequence(num);
    chain.push(num);
  }
  return chain;
}

// runCollatzSequence(13);

function findLongestChain(ct) {
  let longest = 0;
  let longestnumber = 1;

  for (let i = 1; i <= ct; i++) {
    let tmp = runCollatzSequence(i);
    if (tmp.length > longest) {
      longest = tmp.length;
      longestnumber = i;
    }
  }

  return { longest, longestnumber };
}

console.log(findLongestChain(1000000));
