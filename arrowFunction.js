// function doubleIt(num) {
//     return num * 2;
// }

// const doubleIt = function (num) {
//     return num * 2
// }

const doubleIt = num => num * 2

const add = (x, y) => x + y;

const giveNum = () => 12345;

const doMath = (a, b) => {
    const sum = a + b;
    const diff = a - b;
    const result = sum * diff;
    return result;
}

const result = add(16, 6);

const result2 = giveNum();

const result3 = doMath(15, 5);


console.log(result3);