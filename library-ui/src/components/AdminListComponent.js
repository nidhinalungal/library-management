import React from "react";
import AdminListService from "../services/AdminListService";

class AdminListComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            adminList: []
        }
    }

    componentDidMount() {
        AdminListService.getAdminList().then((response) => {
            this.setState({ adminList: response.data })
        });
    }

    render() {
        return (
            <div>
                <table className="table table-stripped">

                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                    </tr>

                    <tbody>
                        {
                            this.state.adminList.map(
                                admin =>
                                    <tr key={admin.id}>
                                        <td>{admin.id}</td>
                                        <td>{admin.username}</td>
                                    </tr>
                            )

                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AdminListComponent