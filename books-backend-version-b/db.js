"use strict";

let mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment');

//DB Init

let dbURI = 'mongodb://127.0.0.1:27017/books'
let connection = mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Connected to database');
});

mongoose.connection.on('error',function (err) {
    console.log('Error connecting to database: ' + err);
});

autoIncrement.initialize(connection);

//Book collection Schema

let bookSchema = new Schema({
    _id : {
        type: Number
    },
    title: {
        type: String
    },
    author: {
        type: String
    },
    rating: {
        type: Number
    },
    description: {
        type: String
    }
});

//Switch _id to id and remove __v

bookSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

bookSchema.plugin(autoIncrement.plugin, 'Book');

let Book = mongoose.model('Book', bookSchema);
module.exports.Book = Book;

//Queries

module.exports.getBookById = function (id, callback) {
    Book.findOne({_id: id}, callback);
};

module.exports.getAllBooks = function (callback) {
    Book.find(callback);
};

module.exports.newBook = function (book, callback) {
    book.save(callback);
};

module.exports.updateBook = function (book, callback) {
    Book.findByIdAndUpdate(book._id, book, {new: true} , callback);

};

module.exports.deleteBook = function (id, callback) {
    Book.findByIdAndRemove(id, callback);
};
