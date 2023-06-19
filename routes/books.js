const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books'); 
const { authenticate } = require('../middleware/authenticate');

router.get('/', booksController.getAllBooks);
router.get('/:id', booksController.getBookById);
router.post('/', booksController.createBook);
router.put('/:id', booksController.updateBook);
router.delete('/:id', authenticate, booksController.deleteBook);

module.exports = router;
