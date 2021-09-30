import React from "react";
import BookService from "../services/BookService";

class BookComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        BookService.getBooks().then((response) => {
            this.setState({ books: response.data })
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Books List </h1>
                <table className="table table-stripped">

                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Shelf Number</td>
                        <td>No. Of Copies</td>
                        <td>Available Copies</td>

                    </tr>

                    <tbody>
                        {
                            this.state.books.map(
                                book =>
                                    <tr key={book.id}>
                                        <td>{book.id}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.shelfNumber}</td>
                                        <td>{book.copies}</td>
                                        <td>{book.available}</td>

                                    </tr>
                            )

                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BookComponent