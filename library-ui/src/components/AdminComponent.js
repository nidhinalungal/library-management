import React from "react";
import AdminService from "../services/AdminService";

class AdminComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            admin:[]
        }
    }

    componentDidMount() {
        AdminService.getAdmin().then((response) => {
            // console.log(response)
            this.setState({ admin: response.data })
        });
    }

    render() {
        const{admin}=this.state
        return (
            <div>{
                admin ? <div>{admin}</div>: "failed to fetch "
                }
            </div>
        )
    }
}

export default AdminComponent