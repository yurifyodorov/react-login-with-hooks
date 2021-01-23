import { combineReducers } from 'redux';
import user from './user/reducer';

export const rootReducer = combineReducers({
  user,
});

export type AppState = ReturnType<typeof rootReducer>;
