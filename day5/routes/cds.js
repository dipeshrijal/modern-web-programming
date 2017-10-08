const express = require("express");
const router = express.Router();
const Cd = require('../models/Cd');


router.get('/', function (req, res) {
    Cd.find({}, function (err, cds) {
        res.render('cds/index', {cds: cds});
    });
});

router.get('/:id/edit', function (req, res) {
    Cd.findOne({_id: req.params.id}, function (err, cd) {
        if (err) res.send("Invalid Id");
        cd.name = req.body.name || cd.name;
        cd.description = req.body.description || cd.description;

        cd.save(function (err, cd) {
            if (err) res.send("Invalid Id");
            res.render('cds/edit', {cd: cd});
        });

    });
});

router.put('/:id', function (req, res) {

    Cd.findOne({_id: req.params.id}, function (err, cd) {
        if (err) res.send("Invalid Id");
        cd.name = req.body.name || cd.name;
        cd.description = req.body.description || cd.description;

        cd.save(function (err, cd) {
            if (err) res.send("Invalid Id");
            res.redirect("/api/cds");
        });

    });
});

router.delete('/:id', function (req, res) {

    Cd.findOne({_id: req.params.id}, function (err, cd) {
        if (err) {
            res.send("Invalid Id");
        } else {
            cd.remove(function (err) {
                if (err) res.send("Invalid Id");
                res.redirect("/api/cds");
            });
        }
    });
});


router.post('/', function (req, res) {
    const book = new Cd({
        name: req.body.name,
        description: req.body.description
    });

    book.save(function (err) {
        if (err) res.send("Invalid Id");
        res.redirect("/api/cds");
    });
});

module.exports = router;