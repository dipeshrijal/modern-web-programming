const sum = (num1, num2) => num1 + num2;

const calculate = (fn, num1, num2) => fn(num1, num2);

console.log(calculate(sum, 5, 6,));

let students = [
    {name: "Dipesh", grade: 6},
    {name: "Jane", grade: 6},
    {name: "Amina", grade: 4},
    {name: "Samira", grade: 4},
];

let studentGrade = students.filter(student => student.grade >= 6);

console.log(studentGrade);

let StudentMap = students.map(student => student.name);

console.log(StudentMap);

const total = students.reduce((getTotal, student) => getTotal + student.grade, 0);
console.log(total);

const chain  = students.filter(student => student.grade >= 6).map(student => student.name);

console.log(chain);