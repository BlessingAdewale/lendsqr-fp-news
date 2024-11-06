import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface logInState {
  isLoggedIn: boolean;
}

const initialState = {
  isLoggedIn: false,
} as logInState;

export const logInSlice = createSlice({
  name: 'logIn',
  initialState,
  reducers: {
    thereisuser: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },

    thereisnouser: (state) => {
      state.isLoggedIn = state.isLoggedIn;
    },
  },
});

export const { thereisuser, thereisnouser } = logInSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLogIn = (state: RootState) => state.logIn.isLoggedIn;
export default logInSlice.reducer;