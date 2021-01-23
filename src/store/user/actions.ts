import { USER_GET, USER_GET_SUCCESS, USER_GET_ERROR, UserGetActionTypes } from './types';

export const getUser = (): UserGetActionTypes => ({ type: USER_GET });
export const getUserSuccess = (): UserGetActionTypes => ({ type: USER_GET_SUCCESS });
export const getUserError = (error: string): UserGetActionTypes => ({ type: USER_GET_ERROR, error });
