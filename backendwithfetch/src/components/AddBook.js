import React, { Component } from 'react';
class AddBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newBook: {}
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.refs.title.value !== "" && this.refs.author.value !== "" && this.refs.rating !== "" && this.refs.published !== "") {
            this.setState(
                {
                    newBook: {
                        title: this.refs.title.value,
                        author: this.refs.author.value,
                        rating: parseFloat(this.refs.rating.value,0),
                        year_published: parseInt(this.refs.published.value,0)
                    }
                }, () => { this.props.addBook(this.state.newBook); }
            );
            this.refs.title.value = "";
            this.refs.author.value = "";
            this.refs.rating.value = "";
            this.refs.published.value = "";
        } else {
            alert("enter proper values");
        }

    }

    render() {
        return (
            <div>
                <h3>Add Book</h3>
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
            </div>
        );
    }

}
export default AddBook;