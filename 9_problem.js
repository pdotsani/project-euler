function pythagoreanTriplet() {
    const combos = createCombos();
    let pyCombos = [];

    combos.forEach((combo) => {
        if(isPythagorean(combo[0], combo[1], combo[2])) {
            pyCombos.push([combo[0], combo[1], combo[2]]);
        }
    })
    console.log(pyCombos);
}

const isPythagorean = (a, b, c) => Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2);
const isSpecial = (a, b, c) => a + b + c === 1000;

function createCombos() {
    let combos = [];
    const numArr = Array.from(Array(1000), (num, idx) => idx + 1);
    for(let i = 0; i <= numArr.length - 2; i++) {
        for(let j = 1; j <= numArr.length  - 1; j++) {
            for(let k = 2; k <= numArr.length; k++) {
                if(isSpecial(numArr[i], numArr[j], numArr[k])) {
                    combos.push([numArr[i], numArr[j], numArr[k]])
                }
            }
        }
    }
    return combos;
}

pythagoreanTriplet();