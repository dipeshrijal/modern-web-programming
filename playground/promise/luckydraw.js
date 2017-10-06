const luckyDraw = function () {
    return new Promise(function (reslove, reject) {
        setTimeout(function () {
            const num = Math.floor((Math.random() * 10) + 1);

            if (num % 2 === 0) {
                reslove("You got lucky");
            } else {
                reject("Sorry try again");
            }
        }, 3000);
    });
};


luckyDraw().then(result => console.log(result)).catch(error => console.log(error));

console.log("done");