import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { Component } from "react";



export class UserPostForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            registerNumber: '',
            firstName: '',
            lastName: '',
            emailId: '',
            slots: '',
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
        axios.post('http://localhost:8081/api/command/user', this.state)
            .then(response => {
                console.log(response)
                this.props.history.push(`/api/users`)
            })


    }

    render() {
        const { registerNumber, firstName, lastName, emailId, department, slots, available } = this.state
        return (
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '70vh' }} >
                    <div className="text-center">
                        <br></br>
                        <h2> Add New User </h2>
                        <form onSubmit={this.submitHandler}>
                            <div>
                                <TextField id="standard-basic" label="Reg. Number" variant="standard"
                                    type='text'
                                    name='registerNumber'
                                    onChange={this.changeHandler}
                                    value={registerNumber}
                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="First Name" variant="standard"
                                    type='text'
                                    name='firstName'
                                    onChange={this.changeHandler}
                                    value={firstName}
                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Last Name" variant="standard"
                                    type='text'
                                    name='lastName'
                                    onChange={this.changeHandler}
                                    value={lastName}
                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Email Id" variant="standard"
                                    type='text'
                                    name='emailId'
                                    onChange={this.changeHandler}
                                    value={emailId}
                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Department" variant="standard"
                                    type='text'
                                    name='department'
                                    onChange={this.changeHandler}
                                    value={department}
                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Slots" variant="standard"
                                    type='text'
                                    name='slots'
                                    onChange={this.changeHandler}
                                    value={slots}
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
                            <button color="success" type='submit'>Submit Now</button>
                        </form>
                    </div>
                </Box>

            </Container>

        )
    }
}

export default UserPostForm