import axios from "axios"
import { Component } from "react"

export class BookPostForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author: '',
            shelfNumber: '',
            copies: '',
            available: ''

        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8082/api/command/book', this.state)
            .then(response => {
                console.log(response)
                this.props.history.push(`/api`)
            })


    }

    render() {
        const { title, author, shelfNumber,  copies, available } = this.state
        return (
            <div className="text-center">
                                <h2> Add New Book </h2>

                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Title </label>
                        <input
                            type='text'
                            name='title'
                            onChange={this.changeHandler}
                            value={title}></input>
                    </div>
                    <div><br></br>
                    <label>Author</label>
                        <input
                            type='text'
                            name='author'
                            onChange={this.changeHandler}
                            value={author}></input>
                    </div>
                    <div><br></br>
                    <label>Shelf Number</label>
                        <input
                            type='text'
                            name='shelfNumber'
                            onChange={this.changeHandler}
                            value={shelfNumber}></input>
                    </div>
                    <div><br></br>
                    <label>No. of Copies</label>
                        <input
                            type='text'
                            name='copies'
                            onChange={this.changeHandler}
                            value={copies}></input>
                    </div>
                    <div><br></br>
                    <label>Available Copies</label>
                        <input
                            type='text'
                            name='available'
                            onChange={this.changeHandler}
                            value={available}></input>
                    </div>
                    <br></br>
                    <button type='submit'>Submit Now</button>

                </form>
            </div>
        )
    }
}

export default BookPostForm