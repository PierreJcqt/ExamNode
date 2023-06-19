const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const library = require('./library.json');

app.use(cors());
app.use(bodyParser.json());


app.listen(3000, function () {
  console.log('Listening on port 3000');
});






app.get('/books', (req, res) => {
    // À IMPLEMENTER : Ajoutez la pagination, le tri et le filtrage
    res.send(library);
});

app.get('/books/:id', (req, res) => {
    const book = library.find(book => book.id === req.params.id);
    if (!book) return res.status(404).send('Livre non trouvé');
    res.send(book);
});

app.post('/books', (req, res) => {
    // À IMPLEMENTER : Validation et assainissement des données
    library.push(req.body);
    fs.writeFileSync('./library.json', JSON.stringify(library));
    res.send(req.body);
});

app.put('/books/:id', (req, res) => {
    const book = library.find(book => book.id === req.params.id);
    if (!book) return res.status(404).send('Livre non trouvé');
    Object.assign(book, req.body);
    fs.writeFileSync('./library.json', JSON.stringify(library));
    res.send(book);
});

app.delete('/books/:id', (req, res) => {
    const index = library.findIndex(book => book.id === req.params.id);
    if (index === -1) return res.status(404).send('Livre non trouvé');
    library.splice(index, 1);
    fs.writeFileSync('./library.json', JSON.stringify(library));
    res.send('Livre supprimé avec succès');
});
