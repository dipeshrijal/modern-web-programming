const mongoose = require('../database');

const bookSchema = new mongoose.Schema({
    name: String,
    ISBN: String,
});

const Book = mongoose.model('Book', bookSchema);


module.exports = Book;