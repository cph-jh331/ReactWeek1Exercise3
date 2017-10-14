import React, { Component } from 'react';
class BooksTable extends Component {

    bookLabels = () =>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Rating</th>
            <th>Published</th>
        </tr>

    bookList = () => this.props.books.map(
        book =>
            <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.rating}</td>
                <td>{book.year_published}</td>
            </tr>
    );

    render() {
        return (
            <div>
                <h3>All Books:</h3>
                <table className="table">
                    <thead>
                        {this.bookLabels()}
                    </thead>
                    <tbody>
                        {this.bookList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BooksTable;
