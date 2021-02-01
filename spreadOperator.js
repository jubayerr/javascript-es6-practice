const ages = [12, 23, 34, 32, 21, 11];
const ages2 = [22, 33, 44, 55, 66];
const ages3 = [72, 83, 54, 35, 86, 90];

const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [ages, ages2, ages3];
const allAges3 = [...ages, ...ages2, ...ages3];

console.log("all Ages", allAges);
console.log("all Ages two", allAges2);
console.log("all Ages three", allAges3);

// array max

const zuck = 500;
const gates = 400;
const musk = 450;

const maxWho = Math.max(zuck, gates, musk);

console.log("The richest in Beabelon", maxWho);

const heighest = [22, 55, 65, 11, 77, 32, 60];

const maxNum = Math.max(...heighest);

console.log("Heighest number in the class", maxNum);