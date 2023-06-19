const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const booksRoutes = require('./routes/books');
const { logger } = require('./middleware/logger');
const errorHandler = require('./middleware/errors');

app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.use(bodyParser.json());

app.use(logger);
app.use('/books', booksRoutes);

app.use(errorHandler.handle404);
app.use(errorHandler.handle500);


app.listen(3000, function () {
    console.log('Listening on port 3000');
});







