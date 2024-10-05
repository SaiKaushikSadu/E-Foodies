import { createSlice } from "@reduxjs/toolkit";
import products from "../../../products.json"

const initialState = {
    products: products
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
})


export const selectProducts = (state) => state.product.products

export default productSlice.reducer