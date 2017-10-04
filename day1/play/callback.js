function greet(name) {
    console.log("Hello " + name);
}


function callusingcallback(name, callback) {
    callback(name);
}

callusingcallback("dipesh", greet);