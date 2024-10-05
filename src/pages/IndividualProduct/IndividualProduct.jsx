import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, CardMedia, Grid, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const IndividualProduct = () => {
    // Quantity state
    const [quantity, setQuantity] = useState(1);

    // Dummy product data
    const product = {
        name: "Margherita Pizza",
        price: "$12.99",
        image: "https://via.placeholder.com/400", // Placeholder image URL
        type: "Italian",
        details: "A delicious classic Margherita pizza with mozzarella cheese, tomato sauce, and fresh basil.",
        restaurant: "Pizza Palace",
    };

    // Handle increase and decrease quantity
    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

    return (
        <Box sx={{ padding: '2rem' }}>
            <Grid container spacing={10} alignItems="center">
                {/* Product Image */}
                <Grid item xs={12} md={5}>
                    <CardMedia
                        component="img"
                        image={product.image}
                        alt={product.name}
                        sx={{ borderRadius: '10px' }}
                    />
                </Grid>

                {/* Product Info */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {product.name}
                    </Typography>

                    <Typography variant="h6" sx={{ color: 'gray', mb: 1 }}>
                        {product.price}
                    </Typography>

                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                        {product.details}
                    </Typography>

                    <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 3 }}>
                        Dish Type: {product.type}
                    </Typography>

                    <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 3 }}>
                        Restaurant: {product.restaurant}
                    </Typography>

                    {/* Quantity and Delete */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={decreaseQuantity}
                            sx={{ minWidth: '40px', minHeight: '40px' }}
                        >
                            -
                        </Button>
                        <TextField
                            value={quantity}
                            inputProps={{ readOnly: true, style: { textAlign: 'center' } }}
                            sx={{ width: '50px', mx: 2 }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={increaseQuantity}
                            sx={{ minWidth: '40px', minHeight: '40px' }}
                        >
                            +
                        </Button>
                        <IconButton color="secondary" sx={{ ml: 2 }}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default IndividualProduct;