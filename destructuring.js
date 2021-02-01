const person = {
    name: "Jonas Kahnwald",
    age: 23,
    job: "Student",
    gf: "Martha Neilsen",
    address: 'Winden',
    phone: "0123456789",
    friends: ['Bartoze', 'Magnus', 'Martha']
}

// const hisName = person.name;
// const phoneNumber = person.phone;

// console.log(hisName, phoneNumber);
// console.log(hisName, phoneNumber);
// console.log(hisName, phoneNumber);

const { name, job, phone } = person;

console.log(name, job, phone);

const cast = ['Louis', 'Lisa', 'Schone', 'Oliver', 'Jordis', 'Karoline']

const [mainCast, focusingCast, ...restOfCast] = cast;

console.log(mainCast);
console.log(focusingCast);
console.log(restOfCast);

const complexCast = {
    name: 'Adam',
    info: {
        job: 'Scientiest',
        address: 'Parallel World'
    }
}

const { address } = complexCast.info;

console.log(address);