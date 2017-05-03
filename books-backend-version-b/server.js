"use strict";

let express = require('express');
let bodyParser = require('body-parser');
const path = require('path');
let book = require('./db.js');

//let cors = require('cors');

let app = express();
app.use(express.static(path.join(__dirname, 'public')));

//app.use(cors());

//Port number
let port = 3000;

app.use(bodyParser.json());

app.route('/api/books')
    .get((req, res) => {
        book.getAllBooks((err, books) => {
            if (err) {
                res.status(500).end();
            } else if (books) {
                res.json(books);
            } else {
                res.status(404).end();
            }
        });
    })
    .post((req, res) => {
        console.log(req.body);

        let newBook = new book.Book({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            rating: req.body.rating
        });

        book.newBook(newBook, (err, book) => {
            if (err) {
                res.status(500).end();
            } else {
                res.status(201).send(book);
            }
        });
    });

app.route('/api/books/:id')
    .get((req, res) => {
        book.getBookById(req.params.id, (err, book) => {
            if (err) {
                res.status(500).end();
            } else if (book) {
                res.json(book);
            } else {
                res.status(404).end();
            }
        })
    })
    .put((req, res) => {

        let updatedBook = new book.Book({
            _id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            rating: req.body.rating
        });

        book.updateBook(updatedBook, (err, book) => {
            if (err) {
                res.status(500).end();
            } else if (book) {
                res.json(book);
            } else {
                res.status(404).end();
            }

        })
    })
    .delete((req, res) => {
        book.deleteBook(req.params.id, (err, book) => {
            if (err) {
                res.status(500).end();
            } else if (book) {
                res.status(200).end();
            } else {
                res.status(404).end();
            }
        })
    });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function () {
    console.log('Listening on port ' + port);
});

