
import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MoodIcon from '@mui/icons-material/Mood';

const benefits = [
    {
        title: "Healthier Body",
        description: "Reducing the risk of disease and increasing the chances of a long, healthy life.",
        icon: <FitnessCenterIcon fontSize="large" />
    },
    {
        title: "Positive Mindset",
        description: "Improving mental health and boosting overall happiness and contentment.",
        icon: <MoodIcon fontSize="large" />
    },
    {
        title: "Improved Lifestyle",
        description: "Promoting better habits, creating more time for what matters most.",
        icon: <FavoriteIcon fontSize="large" />
    },
];

const BenefitsSection = () => {
    return (
        <Box py={10} bgcolor="#2C3333" textAlign="center">
            <Typography variant="h4" component="h2" gutterBottom>
                Benefits of Longevity
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {benefits.map((benefit, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card elevation={3} sx={{borderRadius: '16px'}}>
                            <CardContent>
                                <Box align="center" my={2}>
                                    {benefit.icon}
                                </Box>
                                <Typography variant="h6" component="h3" gutterBottom>
                                    {benefit.title}
                                </Typography>
                                <Typography>
                                    {benefit.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box mt={6}>
                <Typography variant="h6" component="p" gutterBottom>
                    Ready to experience these benefits and more?
                </Typography>
                <Button variant="contained" color="primary">
                    Get Started
                </Button>
            </Box>
        </Box>
    );
};

export default BenefitsSection;
