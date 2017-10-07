let test = function(n){
    return new Promise(function(resolve,reject){
        if(n===10){
            resolve(function (nn) {
                return new Promise(function (resolve, reject) {
                    if (nn === 20) {
                        resolve("it is 20");
                    } else {
                        reject("not 20");
                    }
                });
            })
        }
        else{
            reject("input wrong");
        }
    });
};
//
test(10)
    .then(a => a(20))
    .then(a => console.log(a))
    .catch(a => console.log(a));