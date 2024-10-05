import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Card from '../../components/Card/Card';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/features/product/productSlice';

const Product = () => {
    const products= useSelector(selectProducts)
    // console.log(products)
    
    return (
        <Box sx={{ padding: 3 }}>
            {/* Heading */}
            <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
                Our Products
            </Typography>

            {/* Product Cards */}
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={3} key={product.id}>
                        <Card product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Product;
