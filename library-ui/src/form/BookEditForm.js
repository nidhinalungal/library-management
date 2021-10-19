import React, { Component } from 'react'
import BookService from '../services/BookService';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default class BookEditForm extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            book: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        BookService.getBook(id).then((response) => {
            this.setState({ book: response.data })
        });
    }

    changeHandler = (e) => {
        const data = { ...this.state.book }
        data[e.target.name] = e.target.value
        this.setState({ book: data })
    }

    submitHandler = (e) => {
        e.preventDefault();

        console.log(this.state)

        BookService.updateBook(this.props.match.params.id, this.state.book)
            .then(response => {
                this.props.history.push(`/api/books`)
            })

    }
    render() {
        const { title, author, shelfNumber,  copies, available } = this.state
        return (
            <div>
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
                                    value={this.state.book.title}
                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Author" variant="standard"
                                    type='text'
                                    name='author'
                                    onChange={this.changeHandler}
                                    value={this.state.book.author}
                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Shelf Number" variant="standard"
                                    type='text'
                                    name='shelfNumber'
                                    onChange={this.changeHandler}
                                    value={this.state.book.shelfNumber}
                                />
                            </div>
                            <div>
                            <TextField id="standard-basic" label="Copies" variant="standard"
                                    type='text'
                                    name='copies'
                                    onChange={this.changeHandler}
                                    value={this.state.book.copies}
                                />
                            </div>
                            <div>
                            <TextField id="standard-basic" label="Available Slots" variant="standard"
                                    type='text'
                                    name='available'
                                    onChange={this.changeHandler}
                                    value={this.state.book.available}
                                />
                            </div>
                            <br></br>
                            <button type='submit'>Submit Now</button>
                        </form>
                    </div>
                </Box>
            </Container>
            </div>
        )
    }
}
