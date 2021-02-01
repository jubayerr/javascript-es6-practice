const pi = 3.1416;
// pi = "can't be change of const variable";
console.log(pi);

let galaxy = "milkiway";
galaxy = "andromeda"; // can be change the value

console.log(galaxy);

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// console.log("Outside", i); can't be access from the outsite

for (var i = 0; i <= 5; i++) {
    console.log(i);
}

console.log("Outside", i); // can be access from the outsite