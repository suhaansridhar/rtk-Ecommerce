import {configureStore} from '@reduxjs/toolkit';
import cartSlice from '../features/cart/cartFetching';
import productSlice from '../features/products/productSlice';

const store = configureStore({
    reducer: {
        cart : cartSlice,
        product: productSlice
    }
})

export default store;