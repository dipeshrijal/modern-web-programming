const express = require("express");
const router = express.Router();
const Book = require('../models/Book');


router.get('/', function (req, res) {
    Book.find({}, function (err, books) {
        res.render('index', {books: books});
    });
});

router.get('/:id/edit', function (req, res) {
    Book.findOne({_id: req.params.id}, function (err, book) {
        if (err) res.send("Invalid Id");
        book.name = req.body.name || book.name;
        book.ISBN = req.body.ISBN || book.ISBN;

        book.save(function (err, book) {
            if (err) res.send("Invalid Id");
            res.render('edit', {book: book});
        });

    });
});

router.put('/:id', function (req, res) {

    Book.findOne({_id: req.params.id}, function (err, book) {
        if (err) res.send("Invalid Id");
        book.name = req.body.name || book.name;
        book.ISBN = req.body.ISBN || book.ISBN;

        book.save(function (err, book) {
            if (err) res.send("Invalid Id");
            res.redirect("/api/books");
        });

    });
});

router.delete('/:id', function (req, res) {

    Book.findOne({_id: req.params.id}, function (err, book) {
        if (err) {
            res.send("Invalid Id");
        } else {
            book.remove(function (err) {
                if (err) res.send("Invalid Id");
                res.redirect("/api/books");
            });
        }
    });
});


router.post('/', function (req, res) {
    const book = new Book({
        name: req.body.name,
        ISBN: req.body.ISBN
    });

    book.save(function (err) {
        if (err) res.send("Invalid Id");
        res.redirect("/api/books");
    });
});

module.exports = router;