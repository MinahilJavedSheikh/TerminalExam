import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../features/categories/categoriesSlice';
import detailsReducer from '../features/details/detailsSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    details: detailsReducer,
  },
});
