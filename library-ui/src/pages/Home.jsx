import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Button from '@mui/material/Button';
import { Box } from "@mui/system";
import React from "react";




const MainPage = () => {
    return (

        <div className=" App">
            <Box sx={{ bgcolor: '#D4F1F4' }}>
                <Box>
                    <br />
                    <Button
                        href="/api/users"
                        style={{ color: '#75E6DA' , maxWidth: '300px', maxHeight: '300px', minWidth: '300px', minHeight: '300px' }}
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
                        href="/api/comingsoon"
                        style={{ maxWidth: '600px', maxHeight: '150px', minWidth: '600px', minHeight: '150px' }}
                        variant="contained" size="large" color="success" endIcon={<CollectionsBookmarkIcon />}>
                        Issue/Return
                    </Button>
                </Box>
                <br /><br />
            </Box>
        </div>
    );
};

export default MainPage;