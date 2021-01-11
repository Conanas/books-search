const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: String,
    authors: String,
    description: String,
    image: String,
    link: String
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;