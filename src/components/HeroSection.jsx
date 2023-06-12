
import { Box, Typography, Button, useMediaQuery, Grid } from '@mui/material';
import { useTheme } from '@mui/system';

const HeroSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            justifyContent="center"
            alignItems="center"
            minHeight="100vh" // takes up at least the full height of the viewport
            bgcolor="#f4f6f8" // light background color
            px={isMobile ? 2 : 10} // more padding on larger screens
        >
            <Grid container spacing={16}>
                <Grid item xs={12} md={6}>
                    <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
                        <Typography variant={isMobile ? 'h4' : 'h2'} component="h1" gutterBottom sx={{color: 'black'}}>
                            Welcome to Blueprint OS!
                        </Typography>
                        <Typography variant="h6" component="p" color="text.secondary" mb={4}>
                            Unlock the secrets of longevity. Our platform provides detailed insights and practical advice to help you lead a healthy lifestyle.
                        </Typography>
                        <Button variant="contained" color="primary" size={isMobile ? 'small' : 'large'}>
                            Get Started
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                        <img src="../../src/assets/health.jpg" alt="Health" style={{maxWidth: "100%", height: "auto", borderRadius: '16px'}}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HeroSection;
