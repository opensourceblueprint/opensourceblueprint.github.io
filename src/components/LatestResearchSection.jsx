import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, Grid, CardMedia } from '@mui/material';

const latestResearchArticles = [
    {
        title: "Happiness & Health",
        summary: "Exploring the connection between happiness and longevity. What role does mental well-being play in health?",
        link: "#",
        image: "../../src/assets/smile.jpg"
    },
    {
        title: "Fitness in Longevity",
        summary: "The impact of regular exercise on lifespan. How does physical activity contribute to a longer life?",
        link: "#",
        image: "../../src/assets/running.jpg"
    },
    {
        title: "Nutrition for Longevity",
        summary: "Investigating the effects of diet on life expectancy. What foods can help us live longer?",
        link: "#",
        image: "../../src/assets/food.jpg"
    },
];

const LatestResearchSection = () => {
    return (
        <Box py={10} bgcolor="#fff" textAlign="center">
            <Typography variant="h4" component="h2" gutterBottom>
                Latest Research
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {latestResearchArticles.map((article, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={article.image}
                                alt={article.title}
                            />
                            <CardContent>
                                <Typography variant="h6" component="h3" gutterBottom>
                                    {article.title}
                                </Typography>
                                <Typography>
                                    {article.summary}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href={article.link}>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box mt={6}>
                <Button variant="outlined" color="primary">
                    View All
                </Button>
            </Box>
        </Box>
    );
};

export default LatestResearchSection;
