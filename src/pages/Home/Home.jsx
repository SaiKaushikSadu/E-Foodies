import React from 'react'
import { Box, Typography, Button, Grid } from '@mui/material';
import Card from "../../components/Card/Card"
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    const categories = ["Pizza", "Burgers", "Sushi", "Desserts", "Drinks"];
    const featuredFoods = [
        { name: "Margherita Pizza", price: "10.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgAQfsi6arBxwgeqTD1Q2wJtbA_R4QjVJsZg&s" },
        { name: "Pancakes Stack", price: "9.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRkjgTX6MMOjtZX8-B9CokyqSu7VF-3qEamw&s" },
        { name: "Sushi Platter", price: "24.99", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkDYhCG6kPbCkhbHKIkTQEPOG0IoeiGnzp2g&s" },
    ];


    return (
        <>
            <Box sx={{ padding: '2rem' }}>
                {/* Hero Section */}
                <Box sx={{ textAlign: 'center', mb: 5 }}>
                    <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
                        Welcome to E - Foodies!
                    </Typography>
                    <Typography variant="h5" sx={{ mt: 2, color: 'gray' }}>
                        Craving delicious food? We’ve got you covered.
                    </Typography>
                    <Button variant="contained" color="primary" sx={{ mt: 3 }}
                    onClick={()=>navigate("/products")}
                    >
                        Order Now
                    </Button>
                </Box>

                {/* Categories Section */}
                <Box sx={{ textAlign: 'center', mb: 5 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
                        Categories
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {categories.map((category, index) => (
                            <Grid item xs={6} sm={4} md={2} key={index}>
                                <Button variant="outlined" sx={{ width: '100%' }}>
                                    {category}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Featured Foods Section */}
                <Box sx={{ textAlign: 'center', mb: 5 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
                        Featured Foods
                    </Typography>
                    <Grid container spacing={3}>
                        {featuredFoods.map((food, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card product={food}></Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Box>

            {/* Footer */}
            <Box sx={{ textAlign: 'center', mt: 1, py: 3, backgroundColor: '#f5f5f5' }}>
                <Typography variant="body1">© 2024 Foodies. All Rights Reserved.</Typography>
            </Box>
        </>
    )
}

export default Home