import React from "react";
import UserService from "../services/UserService";

class UserComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data })
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Users List </h1>
                <table className="table table-stripped">

                    <tr>
                        <td>Id</td>
                        <td>Register Number</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>email Id</td>
                        <td>Total Slots</td>
                        <td>Available Slots</td>

                    </tr>

                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.registerNumber}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.emailId}</td>
                                        <td>{user.slots}</td>
                                        <td>{user.available}</td>

                                        

                                    </tr>
                            )

                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent