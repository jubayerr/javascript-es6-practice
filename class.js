class Student {
    constructor(studentId, studentName) {
        this.id = studentId;
        this.name = studentName;
        this.school = "Winden School";
    }
}

const student1 = new Student(101, "Jonas");
const student2 = new Student(102, "Bartoze");
const student3 = new Student(103, "Martha Neilsen");



console.log(student1, student2);
console.log(student3);

// console.log(student1.name, student2.name);
