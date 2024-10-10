import { configureStore } from '@reduxjs/toolkit';
import jewelries from './jewelriesSlice';
import cart from './cartItem';

export const store = configureStore({
    reducer: {
        jewelries: jewelries,
        cart

    }
})