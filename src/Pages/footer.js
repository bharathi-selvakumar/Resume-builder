import React from 'react';
import { Box, Typography } from '@mui/material';
import "./Page.css"
const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <Box sx={{ height: "60px", maxWidth: "100%", mt: "5rem", textAlign: "center" }} >
                    <Typography variant='button' fontWeight="bold ">__© {new Date().getFullYear()}  EJ Tech Solutions. All Rights Reserved.__</Typography>
                </Box>
            </footer>
        </>
    );
}

export default Footer;
