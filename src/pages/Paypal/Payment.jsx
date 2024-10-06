import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

const Payment = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const client_id = process.env.REACT_APP_PAYPAL_CLIENT_ID;

    console.log(process.env.REACT_APP_PAYPAL_CLIENT_ID)

    return (
        <PayPalScriptProvider options={{ "client-id": client_id }}> {/* Replace with your actual PayPal client ID */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    px: '5rem',
                    py: '5rem'
                }}
            >
                <Typography variant="h4" sx={{ mb: 3 }}>Complete Your Payment</Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>Final Total: ${totalPrice.toFixed(2)}</Typography>

                {/* PayPal Button */}
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: totalPrice.toFixed(2), // Use the total price as the payment amount
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            alert(`Transaction completed by ${details.payer.name.given_name}`);
                        });
                    }}
                />
            </Box>
        </PayPalScriptProvider>
    );
};

export default Payment;
