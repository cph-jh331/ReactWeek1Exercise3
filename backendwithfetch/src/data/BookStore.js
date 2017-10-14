const URL = "http://localhost:4000/books/";
const myHeader = new Headers({ "Content-Type": "application/json" });
class BookStore {

    getAllBooks = cb => {
        fetch(URL,
            {
                method: "GET",
                headers: myHeader
            })
            .then(res => res.json())
            .then(data => {
                if (cb) {
                    cb(data)
                }
            });
    }

    getBook = (id, cb) => {
        fetch(URL + id,
            {
                method: "GET",
                headers: myHeader
            })
            .then(res => res.json())
            .then(data => {
                if (cb) {
                    cb(data);
                }
            });
    }

    addBook = (book, cb) => {
        fetch(URL,
            {
                method: "POST",
                headers: myHeader,
                body: JSON.stringify(book)
            })
            .then(res => res.json())
            .then(data => {
                if (cb) {
                    cb(data);
                }
            });
    }

    editBook = (book, cb) => {
        fetch(URL + book.id,
            {
                method: "PUT",
                headers: myHeader,
                body: JSON.stringify(book)
            })
            .then(res => res.json())
            .then(data => {
                if (cb) {
                    cb(book)
                }
            });
    }

    deleteBook = (book, cb) => {
        fetch(URL + book.id,
            {
                method: "DELETE",
                headers: myHeader
            })
            .then(res => res.json())
            .then(data => {
                if (cb) {
                    cb(data);
                }
            });
    }
}

export default BookStore;