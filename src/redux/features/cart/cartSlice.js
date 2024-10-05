import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //Action to add item to cart
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem += item.quantity
            }
            else {
                state.items.push(item)
            }
        },

        //Action to remove item from cart
        removeItem: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
        },

        //Action to remove specific quantity of product
        removeOne: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find((i) => i.id === id);
            if (existingItem && existingItem > 1) {
                existingItem -= 1;
            }
            else {
                state.items = state.items.filter(item => item.id !== id)
            }
        },

        // Action to clear the cart
        clearCart: (state) => {
            state.items = [];
        },
    }
})

export const { addItem, removeItem, removeOne, clearCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items; 

export default cartSlice.reducer;