function doSomethingAsync(callback) {
    try {
        // if some code generates an error this will be
        // caught and can be known to outside using callback
        let result = "Done";
        // throw  new Error("An error occoured");
        callback(null, result);
    } catch (error) {
        callback(error, null);
    }
}

function handleError (error, result) {
    if (error) {
        console.log('Error:', error.message);
    } else {
        console.log(result);
    }
}

doSomethingAsync(handleError);


// setTimeout(function () {
//     try {
//         console.log("About to throw an error");
//         throw new Error("Error thrown hurray!!!");
//     } catch (e) {
//         console.log("This will never execute", e.message);
//     }
// }, 1000);

console.log("This is outside");