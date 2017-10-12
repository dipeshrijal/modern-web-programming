function add(a, b) {
    return a + b;
}
console.log(add(2, 4));
// type assertion
var message;
message = "Long Name";
var msg = message.substr(2); //using prefix
var msg2 = message.substr(2); // using keyword
console.log(msg2);
function sendRequest(cb) {
    if (cb) {
        cb(null, {});
    }
}
sendRequest(function (err, result) {
    if (err) {
        console.log("error");
    }
    else {
        console.log(result);
    }
});
