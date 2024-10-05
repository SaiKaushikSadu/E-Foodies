import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/features/cart/cartSlice';

const Card = ({ product }) => {

    const dispatch = useDispatch();

    const handleAddtoCart = (product) => {
        dispatch(addItem({ ...product, quantity: 1 }));
    }

    return (
        <>

            <Box sx={{ border: '1px solid #ddd', padding: 2, borderRadius: 2, margin: 2 }}>

                {/* Product Image */}
                <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                {/* Product Name */}
                <Typography variant="h6" sx={{ mt: 2 }}>
                    {product.name}
                </Typography>
                {/* Product Price */}
                <Typography variant="body1" color="textSecondary">
                    ${product.price}
                </Typography>
                {/* Add to Cart Button */}
                <Button variant="contained" sx={{ mt: 2 }}
                    onClick={() => handleAddtoCart(product)}
                >
                    Add to Cart
                </Button>
            </Box>

        </>
    )
}

export default Card