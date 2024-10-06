import { createSlice } from "@reduxjs/toolkit";

// Load initial cart items from localStorage, if available
const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
}

const initialState = {
    items: loadCartFromLocalStorage()
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
                existingItem.quantity += 1;
            } else {
                state.items.push(item);
            }
            localStorage.setItem('cart',JSON.stringify(state.items));
            console.log('Updated Cart:', state.items.length); // Log to check cart updates
        },

        // update quantity of item in cart
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(i => i.id === id);
            if (item && quantity > 0) {
                item.quantity = quantity;
            }
            
            localStorage.setItem('cart',JSON.stringify(state.items));
        },

        //Action to remove item from cart
        removeItem: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            
            localStorage.setItem('cart',JSON.stringify(state.items));
        },

        //Action to remove specific quantity of product (not using)
        removeOne: (state, action) => {
            const id = action.payload;
            let existingItem = state.items.find((i) => i.id === id);
            if (existingItem && existingItem > 1) {
                existingItem -= 1;
            }
            else {
                state.items = state.items.filter(item => item.id !== id)
            }
            
            localStorage.setItem('cart',JSON.stringify(state.items));
        },

        // Action to clear the cart
        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem('cart');
        },
    }
})

export const { addItem, updateQuantity, removeItem, removeOne, clearCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;