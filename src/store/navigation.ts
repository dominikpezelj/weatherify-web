import { createSlice } from '@reduxjs/toolkit';

const darkMode = localStorage.getItem('theme') === 'false' ? false : true;

const initialNavigationState = {
  isDarkModeEnabled: darkMode,
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
