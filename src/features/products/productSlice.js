import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false, 
    products: [],
    error: ''
};

export const fetchProduct = createAsyncThunk('productSlice/fetchProduct', () => {
    return axios.get("https://fakestoreapi.com/products")
            .then(resp => resp.data)
})

const productSlice = createSlice({
    name: 'products',
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.loading = true
                state.products = []
                state.error = ''
            })

            .addCase(fetchProduct.fulfilled, (state, action ) => {
                state.loading = false
                state.products = action.payload
                state.error = ''
            })

            .addCase(fetchProduct.rejected, (state, action ) => {
                state.loading = false
                state.products = []
                state.error = action.error.message
            })
    }
})

export default productSlice.reducer;