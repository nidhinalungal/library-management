import axios from "axios"
import { Component } from "react"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
                this.props.history.push(`/api/books`)
            })


    }

    render() {
        const { title, author, shelfNumber,  copies, available } = this.state
        return (
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '70vh' }} >
                    <div className="text-center">
                        <br></br>
                        <h2> Add New Book </h2>
                        <form onSubmit={this.submitHandler}>
                            <div>
                                <TextField id="standard-basic" label="Title" variant="standard"
                                    type='text'
                                    name='title'
                                    onChange={this.changeHandler}
                                    value={title}
                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Author" variant="standard"
                                    type='text'
                                    name='author'
                                    onChange={this.changeHandler}
                                    value={author}
                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Shelf Number" variant="standard"
                                    type='text'
                                    name='shelfNumber'
                                    onChange={this.changeHandler}
                                    value={shelfNumber}
                                />
                            </div>
                            <div>
                            <TextField id="standard-basic" label="Copies" variant="standard"
                                    type='text'
                                    name='copies'
                                    onChange={this.changeHandler}
                                    value={copies}
                                />
                            </div>
                            <div>
                            <TextField id="standard-basic" label="Available Slots" variant="standard"
                                    type='text'
                                    name='available'
                                    onChange={this.changeHandler}
                                    value={available}
                                />
                            </div>
                            <br></br>
                            <button type='submit'>Submit Now</button>
                        </form>
                    </div>
                </Box>
            </Container>
        )
    }
}

export default BookPostForm