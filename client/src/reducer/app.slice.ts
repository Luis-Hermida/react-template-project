import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppError } from './common/types';

export interface AppState {
  isLoading: boolean;
  isError: boolean;
  errorCode?: string;
  errorMessage?: string;
}

export const initialState: AppState = {
  isLoading: false,
  isError: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    appLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    appError(state, action: PayloadAction<AppError>) {
      state.isError = true;
      state.errorCode = action.payload.code;
      state.errorMessage = action.payload.message;
    },
    dismissError(state) {
      state.isError = false;
      state.errorCode = undefined;
      state.errorMessage = undefined;
    },
  },
});

export const { appLoading, appError, dismissError } = appSlice.actions;

const appReducer = appSlice.reducer;
export default appReducer;
