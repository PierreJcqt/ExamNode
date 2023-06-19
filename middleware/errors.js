exports.handle404 = (req, res, next) => {
    res.status(404).send("Sorry, not found !");
};

exports.handle500 = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server error !');
};