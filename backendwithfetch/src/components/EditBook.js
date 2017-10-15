import React, { Component } from 'react';

class EditBook extends Component {
    constructor(props) {
        super(props);
        this.state = { startBook: {}, editedBook: {} }
    }

    handleChange = e => {
        let book = this.findBookInProp(e.target.value);
        if (book) {
            console.log(book.rating);
            this.setState({ startBook: book });
            this.refs.title.value = book.title;
            this.refs.author.value = book.author;
            this.refs.rating.value = book.rating;
            this.refs.published.value = book.year_published;
        } else {
            this.refs.title.value = "";
            this.refs.author.value = "";
            this.refs.rating.value = "";
            this.refs.published.value = "";
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.startBook && this.refs.title.value !== "" && this.refs.author.value !== "" && this.refs.rating !== "" && this.refs.published !== "") {
            this.setState(
                {
                    editedBook: {
                        id: parseInt(this.state.startBook.id, 0),
                        title: this.refs.title.value,
                        author: this.refs.author.value,
                        rating: parseFloat(this.refs.rating.value, 0),
                        year_published: parseInt(this.refs.published.value, 0)
                    }
                }, () => { this.props.editBook(this.state.editedBook) }
            );
            this.refs.title.value = "";
            this.refs.author.value = "";
            this.refs.rating.value = "";
            this.refs.published.value = "";
        } else {
            alert("enter proper values");
        }
    }

    findBookForm = () =>
        <form className="form-inline">
            <div className="form-group">
                <label> Id of book </label>
                <input className="form-control" type="number" onChange={this.handleChange} placeholder="101" />
            </div>
        </form>


    bookForm = () =>
        <form className="form-inline" onSubmit={this.handleSubmit}>
            <label>Title: </label>
            <input type="text" className="form-control" ref="title" />
            <label>Author: </label>
            <input type="text" className="form-control" ref="author" />
            <label>Rating: </label>
            <input type="number" className="form-control" step="any" ref="rating" />
            <label>Year published: </label>
            <input type="number" className="form-control" ref="published" />
            <input type="submit" className="form-control" value="submit" />
        </form>

    findBookInProp = (id) => {
        for (let book of this.props.books) {
            if (book.id === parseInt(id, 0)) {
                return book;
            }
        }
        return null;
    }

    render() {
        return (
            <div>
                <h3>Edit Book:</h3>
                {this.findBookForm()}
                {this.bookForm()}
            </div>
        );
    }
}

export default EditBook;