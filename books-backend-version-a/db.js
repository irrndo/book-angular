"use strict";

let library = [];
module.exports.library = library;

//Queries

module.exports.getBookById = function (id) {
    let pos = findPosByValue(id);
    if (pos == -1) {
        return null;
    } else {
        return library[pos];
    }
};

module.exports.getAllBooks = function (book) {
    return library;
};

module.exports.newBook = function (book) {
    let lastBook = library.length;
    book.id = lastBook + 1;
    library.push(book);
};

module.exports.updateBook = function (book) {
    let pos = findPosByValue(book.id);
    if (pos == -1) {
        return null;
    } else {
        library[pos] = book;
        return book;
    }

};

module.exports.deleteBook = function (id) {
    let pos = findPosByValue(id);
    if (pos != -1) {
        library.splice(pos, 1);
        return true;
    } else {
        return false;
    }

};

function findPosByValue(id) {
    var len = library.length;

    for (let i = 0; i < len; i++) {
        if (library[i].id == id) {
            return i;
        }
    }

    return -1;

};
