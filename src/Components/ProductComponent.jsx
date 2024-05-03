import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchProduct } from '../features/products/productSlice';

function ProductComponent() {
    const products = useSelector(state => state.product.products);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct())
    }, []);

    console.log(products)
  return (
    <div>
      
    </div>
  )
}

export default ProductComponent
