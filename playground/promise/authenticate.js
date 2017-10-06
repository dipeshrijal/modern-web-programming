const authenticate = function (userId) {
    return new Promise(function (resolve, reject) {
        if (userId > 0) {
            userData.userId = true;
            userData.authenticated = true;
            resolve(userData);
        } else {
            reject(Error('cannot find user'));
        }
    })
};

authenticate(6).then(userData => console.log(userData))
.then(bankInfo => console.log(bankInfo))
.catch(error => console.error(error));