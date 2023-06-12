import { Box, Typography, TextField, Button, Container } from '@mui/material';

const NewsletterSection = () => {
    return (
        <Box py={10} bgcolor="#fff" textAlign="center">
            <Typography variant="h4" component="h2" gutterBottom sx={{color: 'black'}}>
                Newsletter Signup
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
                Stay updated with the latest news and research in longevity.
            </Typography>
            <Container maxWidth="sm">
                <Box component="form" noValidate autoComplete="off" py={2}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Enter your email"
                        name="email"
                        type="email"
                        required
                    />
                    <Box py={2}>
                        <Button variant="contained" color="primary" type="submit">
                            Subscribe
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default NewsletterSection;
