import axios from "axios"
import { Component } from "react"

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
                this.props.history.push(`/api`)
            })


    }

    render() {
        const { registerNumber, firstName, lastName,  emailId, slots, available } = this.state
        return (
            <div className="text-center">
                <h2> Add New User </h2>
                <br></br>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Reg. Number </label>
                        <input
                            type='text'
                            name='registerNumber'
                            onChange={this.changeHandler}
                            value={registerNumber}></input>
                    </div>
                    <div><br></br>
                    <label>First Name</label>
                        <input
                            type='text'
                            name='firstName'
                            onChange={this.changeHandler}
                            value={firstName}></input>
                    </div>
                    <div><br></br>
                    <label>Last Name</label>
                        <input
                            type='text'
                            name='lastName'
                            onChange={this.changeHandler}
                            value={lastName}></input>
                    </div>
                    <div><br></br>
                    <label>email Id</label>
                        <input
                            type='text'
                            name='emailId'
                            onChange={this.changeHandler}
                            value={emailId}></input>
                    </div>
                    <div><br></br>
                    <label>Slots</label>
                        <input
                            type='text'
                            name='slots'
                            onChange={this.changeHandler}
                            value={slots}></input>
                    </div>
                    <div><br></br>
                    <label>Available Slots</label>
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

export default UserPostForm