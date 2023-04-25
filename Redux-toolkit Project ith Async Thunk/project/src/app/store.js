import { configureStore } from '@reduxjs/toolkit';
import  productsReducer from '../features/products/productSlice';
import cartSReducer from '../features/cart/cartSlice';
export const store = configureStore({
  reducer: {
    product:productsReducer,
    cart:cartSReducer
  },
});
