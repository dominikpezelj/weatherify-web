import { createSlice } from '@reduxjs/toolkit';

const initialNavigationState = {
  isDarkModeEnabled: false,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: initialNavigationState,
  reducers: {
    toggleDarkMode(state, action) {
      state.isDarkModeEnabled = action.payload;
    },
  },
});
export const navigationActions = navigationSlice.actions;
export default navigationSlice.reducer;
