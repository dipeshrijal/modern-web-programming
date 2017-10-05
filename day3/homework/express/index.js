const express = require("express");
const app = express();
const path = require("path");
const fetch = require('node-fetch');


app.set("env", "development");
app.set("view engine", "ejs");
app.set("x-powered-by", false);
app.enable("case sensitiverouting");
app.set("trust proxy", true);

app.set("views", path.join(__dirname, 'public'));

app.get("/users", (req, res) => {

    fetch('http://jsonplaceholder.typicode.com/users/')
        .then(function (res) {
            return res.json();
        }).then(function (json) {
        res.render('index.ejs', {users: json});
    });


});

app.listen(8282, () => {
    console.log("listening to port");
});