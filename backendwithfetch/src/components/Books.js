import React, { Component } from 'react';
import BookStore from '../data/BookStore';
import BooksTable from './BooksTable';
import AddBook from './AddBook';
import DeleteBook from './DeleteBook';
import EditBook from './EditBook';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            book: {}
        };
        this.bStore = new BookStore();
    }

    componentDidMount() {
        this.bStore.getAllBooks(this.booksUpdater);
        this.bStore.getBook(101, this.bookUpdater);
    }

    booksUpdater = data => {
        this.setState({ books: data });
        console.log(this.state.books);
    }

    bookUpdater = data => {
        this.setState({ book: data });
        console.log(this.state.book);
    }

    handleChange = e => {
        this.bStore.getBook(e.target.value, this.bookUpdater);
    }

    handleAddBook = newBook => {
        this.bStore.addBook(newBook);
        this.bStore.getAllBooks(this.booksUpdater);
    }

    handleDeleteBook = deleteBook => {
        this.bStore.deleteBook(deleteBook);
        this.bStore.getAllBooks(this.booksUpdater);
    }

    handleEditBook = editedBook => {
        this.bStore.editBook(editedBook);
        this.bStore.getAllBooks(this.booksUpdater);
    }

    render() {
        return (
            <div className="books">
                <EditBook books={this.state.books} editBook={this.handleEditBook} />
                <hr />
                <DeleteBook books={this.state.books} deleteBook={this.handleDeleteBook} />
                <hr />
                <AddBook addBook={this.handleAddBook} />
                <hr />
                <BooksTable books={this.state.books} />
            </div>
        );
    }
}
export default Books;