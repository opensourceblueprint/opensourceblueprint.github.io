import React from 'react';
import {Box, Button} from "@mui/material";

const Footer = () => {

    return (
        <Box sx={{p: 3}}>
            <Button color="inherit" href="/contact">Contact Us</Button>
            <Button color="inherit" href="/faq">FAQ</Button>
            <Button color="inherit" href="/privacy">Privacy Policy</Button>
            <Button color="inherit" href="/terms">Terms of Use</Button>
        </Box>
    );
};

export default Footer;