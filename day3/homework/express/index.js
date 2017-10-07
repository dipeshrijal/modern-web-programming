const express = require("express");
const app = express();
const path = require("path");
const fetch = require('node-fetch');


app.set("env", "development");
app.set("view engine", "ejs");
app.set("x-powered-by", false);
app.enable("case sensitive routing");
app.set("trust proxy", true);

app.set("views", path.join(__dirname, 'public'));

app.get("/users", (req, res) => {

    // async function
    (async function getUsers() {
        const data = await fetch('http://jsonplaceholder.typicode.com/users/');
        const json = await data.json();
        res.render('index', {users: json});
    })();

    // promise functions
    // fetch('http://jsonplaceholder.typicode.com/users/')
    //     .then(function (res) {
    //         return res.json();
    //     })
    //     .then(function (json) {
    //         res.render('index', {users: json}
    //         );
    //     });


});

app.listen(8080, () => {
    console.log("listening to port");
});