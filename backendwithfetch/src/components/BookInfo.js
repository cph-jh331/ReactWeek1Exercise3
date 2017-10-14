import React, { Component } from 'react';
export default class BookInfo extends Component {
    bookLabels = () =>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Rating</th>
            <th>Published</th>
        </tr>

    bookRow = () =>
        <tr>
            <td>{this.props.book.id}</td>
            <td>{this.props.book.title}</td>
            <td>{this.props.book.author}</td>
            <td>{this.props.book.rating}</td>
            <td>{this.props.book.year_published}</td>
        </tr>

    render() {
        return (
            <table className="table">
                <thead>
                    {this.bookLabels()}
                </thead>
                <tbody>
                    {this.bookRow()}
                </tbody>
            </table>
        )
    }

}