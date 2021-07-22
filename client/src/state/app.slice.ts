import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { thunk } from './action-utils';
import * as api from '../api/main';

import { AppError } from './common/types';

export interface AppState {
  isLoading: boolean;
  isError: boolean;
  errorCode?: string;
  errorMessage?: string;
  testApi?: any;
}

export const initialState: AppState = {
  isLoading: false,
  isError: false,
};

export const getTestApiData = (name: string, request = thunk) =>
  request({
    requested: () => getTestApiRequested(),
    execute: (_state, service = api) => service.getTestApi(name),
    succeeded: (data) => getTestApiSuccess(data),
    next: (data, _state) => getTestApiNext(data),
  });

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
    getTestApiRequested() {
      // eslint-disable-next-line no-console
      console.log('Request');
    },
    getTestApiSuccess(state, action: any) {
      state.testApi = action.payload;
    },
    getTestApiNext(_state, action: any) {
      // eslint-disable-next-line no-console
      console.log('Next', action.payload);
    },
  },
});

export const {
  appLoading,
  appError,
  dismissError,
  getTestApiRequested,
  getTestApiSuccess,
  getTestApiNext,
} = appSlice.actions;

const appReducer = appSlice.reducer;
export default appReducer;
