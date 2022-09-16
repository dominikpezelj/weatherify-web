import { createSlice } from '@reduxjs/toolkit';

const initialWeatherState = {
  weather: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState: initialWeatherState,
  reducers: {
    weather(state, action) {
      state.weather = action.payload;
    },
  },
});
export const weatherActions = weatherSlice.actions;
export default weatherSlice.reducer;
