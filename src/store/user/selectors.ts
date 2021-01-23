import { AppState } from '../rootReducer';
import { UserState } from './reducer';

export const getRoot = (state: AppState): UserState => state.user;

export const isLoading = (state: AppState): boolean => getRoot(state).isLoading;
