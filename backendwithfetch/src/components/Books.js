import React, { Component } from 'react';
import BookStore from '../data/BookStore';
import BooksTable from './BooksTable';
import BookInfo from './BookInfo';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = { books: [], book: {} };
        this.bStore = new BookStore();
    }

    componentDidMount() {
        this.bStore.getAllBooks(this.booksUpdater);
        this.bStore.getBook(101, this.bookUpdater);
    }

    booksUpdater = data => {
        this.setState({ books: data });
    }

    bookUpdater = data => {
        this.setState({ book: data });
    }

    render() {
        console.log(this.state.books);
        console.log(this.state.book);
        return (
            <div className="books">
                <h1>Found Book:</h1>
                <BookInfo book={this.state.book} />
                <h1>All Books:</h1>
                <BooksTable books={this.state.books} />
            </div>
        );
    }
}
export default Books;