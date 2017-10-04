function fib(n, callback) {
    setImmediate(() => {
        if (n < 2) {
            callback(n);
        } else {
            // fib(n - 1, (fib1) => {
            //     fib(n - 2, (fib2) => {
            //         callback(fib1 + fib2);
            //     })
            // })


            fib(n -1, function(fib1) {
                fib(n-2, function (fib2) {
                    callback(fib1 + fib2);
                })
            });






        }
    })
}

setTimeout(() => console.log('timeout'), 0);

console.log("Don't need to wait for long running process");

function callback(result) {
    console.log(result);
}


fib(30, callback);