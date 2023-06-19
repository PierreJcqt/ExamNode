const fs = require('fs');
const library = require('../library.json');
const { validationResult } = require('express-validator');


exports.getAllBooks = (req, res) => {

    // METHODE TRIE
    let books = [...library];
    if (req.query.author) {
        books = books.filter(book => book.author.toLowerCase() === req.query.author.toLowerCase());
    }
    if (req.query.sortBy && req.query.sortBy.toLowerCase() === 'title') {
        books.sort((a, b) => a.title.localeCompare(b.title));
    }

    // METHODE PAGINATION
    const page = parseInt(req.query.page) > 0 ? parseInt(req.query.page) : 1;
    const limit = parseInt(req.query.limit) > 0 ? parseInt(req.query.limit) : books.length;
    const startIndex = (page - 1) * limit;
    const endIndex = Math.min(startIndex + limit, books.length);

    
    res.send(books.slice(startIndex, endIndex));
};


exports.getBookById = (req, res) => {
    const book = library.find(book => book.id === req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.send(book);
};

exports.createBook = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    library.push(req.body);
    fs.writeFileSync('../library.json', JSON.stringify(library));
    res.send(req.body);
};

exports.updateBook = (req, res) => {
    const book = library.find(book => book.id === req.params.id);
    if (!book) return res.status(404).send('Book not found');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    Object.assign(book, req.body);
    fs.writeFileSync('../library.json', JSON.stringify(library));
    res.send(book);
};

exports.deleteBook = (req, res) => {
    const index = library.findIndex(book => book.id === req.params.id);
    if (index === -1) return res.status(404).send('Book not found');
    library.splice(index, 1);
    fs.writeFileSync('../library.json', JSON.stringify(library));
    res.send('Book delete succesfully');
};