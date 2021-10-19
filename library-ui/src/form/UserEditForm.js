import axios from "axios"
import { Component } from "react"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import UserService from "../services/UserService";



export class UserEditForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        UserService.getUser(id).then((response) => {
            this.setState({ user: response.data })
        });
    }

    changeHandler = (e) => {
        const data = { ...this.state.user }
        data[e.target.name] = e.target.value
        this.setState({ user: data })
    }

    submitHandler = (e) => {
        e.preventDefault();

        console.log(this.state)

        UserService.updateUser(this.props.match.params.id, this.state.user)
            .then(response => {
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
                                    value={this.state.user.registerNumber}
                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="First Name" variant="standard"
                                    type='text'
                                    name='firstName'
                                    onChange={this.changeHandler}
                                    value={this.state.user.firstName}
                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Last Name" variant="standard"
                                    type='text'
                                    name='lastName'
                                    onChange={this.changeHandler}
                                    value={this.state.user.lastName}
                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Email Id" variant="standard"
                                    type='text'
                                    name='emailId'
                                    onChange={this.changeHandler}
                                    value={this.state.user.emailId}
                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Department" variant="standard"
                                    type='text'
                                    name='department'
                                    onChange={this.changeHandler}
                                    value={this.state.user.department}
                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Slots" variant="standard"
                                    type='text'
                                    name='slots'
                                    onChange={this.changeHandler}
                                    value={this.state.user.slots}
                                />
                            </div>
                            <div>
                                <TextField id="standard-basic" label="Available Slots" variant="standard"
                                    type='text'
                                    name='available'
                                    onChange={this.changeHandler}
                                    value={this.state.user.available}
                                />
                            </div>
                            <br></br>
                            <button color="success" type='submit'>Update Now</button>
                        </form>
                    </div>
                </Box>

            </Container>

        )
    }
}

export default UserEditForm