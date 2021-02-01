class Parent {
    constructor() {
        this.fatherName = "Ulrick Neilsen";
        this.motherName = "Kathrine Neilsen";
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + ' ' + this.fatherName;
    }
}

const baby = new Child("Mikkel");
const baby2 = new Child("Martha");
const baby3 = new Child("Magnus");

console.log(baby, baby2);
console.log(baby3.getFullName());