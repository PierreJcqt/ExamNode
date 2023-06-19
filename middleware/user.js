const authenticate = (req, res, next) => {
    if (!req.user) return res.status(401).send('Non autorisé');
    next();
}

app.use('/books/:id', authenticate);
