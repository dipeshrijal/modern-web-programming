let string = "racecar";

function checkPalindrome(str, callback) {
    setImmediate(() => {
        let strLen = str.length;
        if (strLen === 0 || strLen === 1) {
            callback("It is a palindrome.");
            return;
        }

        if (str[0] === str[strLen - 1]) {
            return checkPalindrome(str.slice(1, strLen - 1), callback);
        }

        callback("It is not a palindrome.");
    });
}

let callback = function (ret) {
    console.log(ret);
};


checkPalindrome(string, callback);

console.log("This runs first.");

