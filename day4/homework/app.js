const express = require("express");
const favicon = require('serve-favicon');
const path = require("path");
const morgan  = require("morgan");
const fs = require("fs");
const app = express();
const books = require("./routes/books");
const cds = require("./routes/cds");
const logger = require("./middleware/logger");
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("views", path.join(__dirname, 'views'));
app.use(favicon(path.join(__dirname, 'public/assets', 'favicon.ico')));


app.use(logger);
app.use('/api/resources', express.static('public/assets'));
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), {flags: 'a'});
app.use(morgan('combined', {stream: accessLogStream}));



app.get('/', function (req, res) {
    res.render("index");
});

app.use('/api/books', books);
app.use('/api/cds', cds);


app.listen(8888);
