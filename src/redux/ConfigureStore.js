import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/Books';
import categoriesReducer from './categories/Categories';

const rootReducer = configureStore({
  reducer: combineReducers({
    books: booksReducer,
    categories: categoriesReducer,
  }),
});

export default rootReducer;
