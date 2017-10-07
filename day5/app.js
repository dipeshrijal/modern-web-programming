const express = require("express");
const app = express();

// Start morgan
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), {flags: 'a'});
app.use(morgan('combined', {stream: accessLogStream}));

// views
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));
app.use('/api/resources', express.static('public/assets'));

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// application routes
const books = require("./routes/books");
const cds = require("./routes/cds");

app.get('/', function (req, res) {
    res.render('home');
});

app.use("/api/books", books);
app.use("/api/cds", cds);

app.listen(8000);