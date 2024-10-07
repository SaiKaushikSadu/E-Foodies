import React from 'react';
import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../../redux/features/cart/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    const handleIncreaseQuantity = (id, quantity) => {
        const newQuantity = quantity + 1;
        dispatch(updateQuantity({ id, quantity: newQuantity }));
    };

    const handleDecreaseQuantity = (id, quantity) => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            dispatch(updateQuantity({ id, quantity: newQuantity }));
        }
    };

    return (
        <>

            {cartItems.length > 0 ? (
                <Box sx={{ px: { xs: '1rem', md: '5rem', lg: '10rem' }, py: { xs: '2rem', md: '4rem', lg: '5rem' } }}>
                    <Typography variant="h4" sx={{ mb: 3, textAlign: { xs: 'center', md: 'left' } }}>Checkout</Typography>

                    {cartItems.map((item) => (
                        <Grid
                            container
                            alignItems="center"
                            spacing={2}
                            key={item.id}
                            sx={{
                                mb: 2,
                                borderBottom: '1px solid #ddd',
                                pb: 2,
                                flexDirection: { xs: 'column', md: 'row' },
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            {/* Product Image */}
                            <Grid item xs={12} md={2}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                />
                            </Grid>

                            {/* Product Details */}
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6">{item.name}</Typography>
                                <Typography variant="body1">Price: ${item.price}</Typography>
                                <Typography variant="body1">Type: {item.type}</Typography>
                                <Typography variant="body1">Restaurant: {item.restaurant}</Typography>

                                {/* Quantity Controls */}
                                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, alignItems: 'center', mt: 1 }}>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                                    >
                                        -
                                    </Button>
                                    <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                                    >
                                        +
                                    </Button>
                                </Box>
                            </Grid>

                            {/* Total for the Item */}
                            <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                                <Typography variant="h6">Total: ${(item.price * item.quantity).toFixed(2)}</Typography>
                            </Grid>

                            {/* Remove Item */}
                            <Grid item xs={12} md={1} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                                <IconButton style={{ color: 'red' }} onClick={() => handleRemoveItem(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    ))}

                    {/* Final Total and Checkout Button */}
                    <Box sx={{ textAlign: { xs: 'center', md: 'right' }, mt: 4 }}>
                        <Typography variant="h5" sx={{ mb: 2 }}>Final Total: ${totalPrice.toFixed(2)}</Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => navigate("/payment")}
                        >
                            Proceed to Checkout
                        </Button>
                    </Box>
                </Box>
            ) : (
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: 2,
                        py: 4,
                    }}
                >
                    <Typography variant="h2" sx={{ mt: 3, textAlign: 'center' }}>Checkout</Typography>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                        alt="Empty Cart"
                        style={{
                            marginTop: '5rem',
                            width: '40%',
                            maxWidth: '200px',
                            objectFit: 'cover',
                        }}
                    />
                    <Typography variant="h4" sx={{ mt: 4, textAlign: 'center' }}>No items in your cart</Typography>
                </Box>
            )}


        </>
    );
};

export default Checkout;
