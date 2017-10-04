// function fib(n, callback) {
//     if (n < 2)
//         return callback(n);
//     else
//         process.nextTick(() => {
//             fib(n-1, (sum1) => {
//                 fib(n-2, (sum2) => {
//                     callback(sum1 + sum2);
//                 })
//             })
//         })
// }
//
// setTimeout(() => console.log('timeout'), 0);
//
// console.log("Don't need to wait for long processing");
//
// fib(30, (result) => {
//     console.log(result);
// });

const loop = () => {
    let sum = 0;
    for (let i = 0; i <= 5e8; i ++) {
        sum += i;
    }

    console.log(sum);
};

const slow = () => {

    process.nextTick(loop, 0);

    if (Math.random() > 0.5) {
        return "Error";
    }

    return {id: 12345};
};

console.log(slow());