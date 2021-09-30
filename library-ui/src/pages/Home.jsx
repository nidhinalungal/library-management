import React from "react";
import { Link } from "react-router-dom";


const MainPage = () => {
    return (
        <div>

            <h3 className="text-center"><Link to="/api/users">Show All Users</Link></h3>
            <div>
                <h4 className="text-center"><Link to="/api/command/user">Add User</Link></h4>
            </div>
            <br></br>
            <div>
                <h3 className="text-center"><Link to="/api/books">Show All Books</Link></h3>
            </div>
            
            <div>
                <h4 className="text-center"><Link to="/api/command/book">Add Book</Link></h4>
            </div>
        </div>
    );
};

export default MainPage;