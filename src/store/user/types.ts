export const USER_GET = '[USER] get';
export const USER_GET_SUCCESS = '[USER] get success';
export const USER_GET_ERROR = '[USER] get error';

type UserGet = {
  type: typeof USER_GET;
};

type UserGetSuccess = {
  type: typeof USER_GET_SUCCESS;
};

type UserGetError = {
  type: typeof USER_GET_ERROR;
  error: string;
};

export type UserGetActionTypes = UserGet | UserGetSuccess | UserGetError;
