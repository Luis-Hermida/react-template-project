import { combineReducers } from 'redux';
import app from './app.slice';

const rootReducer = combineReducers({ app });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
