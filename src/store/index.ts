import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api/api';
import navigationReducer from './navigation';
import weatherReducer from './weather';

export const store = configureStore({
  reducer: { navigation: navigationReducer, api: api.reducer, weather: weatherReducer },
});
