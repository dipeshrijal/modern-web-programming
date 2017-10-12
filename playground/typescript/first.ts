function add(a : number, b: number) : number {
    return a + b;
}

console.log(add(2,4));

// type assertion

let message;

message = "Long Name";

let msg = (<string> message).substr(2); //using prefix

let msg2= (message as string).substr(2); // using keyword

console.log(msg2);

// function type
type MaybeError = Error | null;

type Callback = (err: MaybeError , response: object) => void;

function sendRequest(cb:Callback) :void {
    if (cb) {
        cb(null, {});
    }
}

sendRequest(function (err, result) {
    if (err) {console.log("error")}
    else {
        console.log(result);
    }
});
