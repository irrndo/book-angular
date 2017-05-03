"use strict";

let express = require('express');
let bodyParser = require('body-parser');
const path = require('path');
let db = require('./db.js');

//let cors = require('cors');

let app = express();
app.use(express.static(path.join(__dirname, 'public')));

//app.use(cors());

//Port number
let port = 3000;

app.use(bodyParser.json());

app.route('/api/books')
    .get((req, res) => {
        res.json(db.library);
    })
    .post((req, res) => {

        let newBook = {
            id: 0,
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            rating: req.body.rating
        };

        db.newBook(newBook);

        res.status(201).send(newBook);

    });

app.route('/api/books/:id')
    .get((req, res) => {
        let bookFound = db.getBookById(req.params.id);
            if (bookFound != null) {
                res.json(bookFound);
            } else {
                res.status(404).end();
            }

    })
    .put((req, res) => {

        let newBook = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            rating: req.body.rating
        };

        let bookUpdated = db.updateBook(newBook);
            if (bookUpdated != null) {
                res.json(bookUpdated);
            } else {
                res.status(404).end();
            }

    })
    .delete((req, res) => {
        let isDeleted = db.deleteBook(req.params.id);
            if (isDeleted) {
                res.status(200).end();
            } else {
                res.status(404).end();
            }
    });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function () {
    console.log('Listening on port ' + port);
});

