import React, { Component } from 'react';
class DeleteBook extends Component {
    constructor(props) {
        super(props);
        this.state = { bookDelete: {} }
    }

    //skulle sgu bare have sendt id videre op... men det virker...
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.bookDelete) {
            this.props.deleteBook(this.state.bookDelete);
        }
    }

    handleChange = e => {
        let book = this.findBookInProps(e.target.value);
        if (book) {
            this.setState({
                bookDelete: {
                    id: book.id,
                    title: book.title,
                    author: book.author,
                    rating: book.rating,
                    year_published: book.year_published
                }
            });
        } else {
            this.setState({
                deleteBook: {}
            });
        }
    }

    findBookInProps = id => {
        for (let book of this.props.books) {
            if (book.id === parseInt(id, 0)) {
                return book;
            }
        }
        return {};
    }

    render() {
        return (
            <div>
                <h3>Delete A Book:</h3>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <label>Book id:</label>
                    <input type="number" className="form-control" onChange={this.handleChange} />
                    <input type="submit" className="form-control" value="submit" />
                </form>
            </div>
        );
    }
}
export default DeleteBook;