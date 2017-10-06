const express = require("express");
const router = express.Router();


router.get('/', function (req, res) {
    res.send("helllo from cd");
});


module.exports = router;