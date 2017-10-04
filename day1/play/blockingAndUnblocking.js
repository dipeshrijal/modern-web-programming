
// blocking code every function runs after each other

const addSync = (a, b) => {
    for (let i = 0; i < 9e7; i ++) {

    }

    console.log(a + b);
};

// non-blocking code

// const addSync = (a, b) => {
//     return setTimeout(() => {
//         console.log(a + b);
//     }, 1000);
// };


console.log("start");
const A = addSync(1, 2);
const B = addSync(2, 3);
const C = addSync(3, 4);
console.log("end");


// blocking vs non-blocking
let open = false;

setTimeout(function () {
    open = true;
}, 1000);


while(!open) {}

console.log("opened");