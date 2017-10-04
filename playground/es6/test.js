function multiply(num1, num2) {
    return num1 * num2;
}


console.log(multiply(2, 4));

let f2 = (num1, num2) => num1 * num2;

console.log(f2(2, 4));


// Array Destructuring
const details = ['Dipesh', 1000, 'dipeshrijal.com.np'];

const [name, id, address] = details;

console.log(address);
console.log(id);
console.log(name);

//Object Destructing
const settings = {width: 300, color: "blue"};
const {width, color = "black"} = settings;
console.log(color);
console.log(width);

// swap variables
let color1 = "green";
let color2 = "red";

[color1, color2] = [color2, color1];

console.log(color1);
console.log(color2);


//object Destructuring and renaming the variable

const {weight: w = 800, height: h = 400} = {weight: 800};

console.log(w);
console.log(h);


// Rest and Spread
function foo(first, second, ...args) {
    return first + second + args.reduce((sum, next) => sum + next, 0);
}

console.log(foo(1, 2, ...[4, 5, 6]));

let numbers = [1, 2, 4, 5, 6, 7, 8, 9];
console.log(...numbers);