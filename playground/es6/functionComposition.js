// const compose= (f,g) => x => f(g(x));

function compose(f, g) {
    return function(x) {
        return f(g(x));
    }
}

//const upperCase = x => x.toUpperCase();

function upperCase(x) {
    // console.log(x);
    return x.toUpperCase();
}

// const exclaim = x => x + "!";

function exclaim(x) {
    // console.log(x);
    return x + "!";
}


const surprise = compose(upperCase, exclaim);


console.log(surprise("Hello"));