const URL = "http://localhost:4000/books/";
const myHeader = new Headers({ "Content-Type": "application/json" });
class BookStore {

    getAllBooks = cb => {
        fetch(URL, {
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
        fetch(URL + id, {
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
}

export default BookStore;