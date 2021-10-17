import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';




const MainPage = () => {
    return (

        <div className=" App">
            <Box sx={{ bgcolor: '#D4F1F4' }}>
                <Box>

                    <Button
                        href="/api/users"
                        style={{color:'#75E6DA'},{ maxWidth: '300px', maxHeight: '300px', minWidth: '300px', minHeight: '300px' }}
                        variant="contained" size="large" endIcon={<PeopleAltIcon />}>
                        Users
                    </Button>
                    <Button
                        href="/api/books"
                        style={{ maxWidth: '300px', maxHeight: '300px', minWidth: '300px', minHeight: '300px' }}
                        color="info" variant="contained" size="large" endIcon={<MenuBookIcon />}>
                        Books
                    </Button>
                </Box>
                <br></br>
                <Box>
                    <Button
                        href="/api/users"
                        style={{ maxWidth: '600px', maxHeight: '150px', minWidth: '600px', minHeight: '150px' }}
                        variant="contained" size="large" color="success" endIcon={<CollectionsBookmarkIcon />}>
                        Issue/Return
                    </Button>
                </Box>
            </Box>



            {/* <h3 className="text-center"><Link to="/api/users">Show All Users</Link></h3>
            <div>
                <h4 className="text-center"><Link to="/api/command/user">Add User</Link></h4>
            </div>
            <br></br>
            <div>
                <h3 className="text-center"><Link to="/api/books">Show All Books</Link></h3>
            </div>
            <div>
                <h4 className="text-center"><Link to="/api/command/book">Add Book</Link></h4>
            </div> */}
        </div>
    );
};

export default MainPage;