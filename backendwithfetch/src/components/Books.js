import React, { Component } from 'react';
import BookStore from '../data/BookStore';
import BooksTable from './BooksTable';
import BookInfo from './BookInfo';
import AddBook from './AddBook';

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

    findBook = () =>
        <form className="form-inline">
            <div className="form-group">
                <label> Id of book </label>
                <input className="form-control" type="number" onChange={this.handleChange} placeholder="101" />
            </div>
        </form>

    handleAddBook = newBook => {
        this.bStore.addBook(newBook);
        this.bStore.getAllBooks(this.booksUpdater);
    }

    render() {
        return (
            <div className="books">
                <AddBook addBook={this.handleAddBook} />
                <hr />
                <h3>Find book with id</h3>
                {this.findBook()}
                <hr />
                <h3>Found Book:</h3>
                <BookInfo book={this.state.book} />
                <hr />
                <h3>All Books:</h3>
                <BooksTable books={this.state.books} />
            </div>
        );
    }
}
export default Books;