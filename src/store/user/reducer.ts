import { USER_GET, USER_GET_SUCCESS, USER_GET_ERROR, UserGetActionTypes } from './types';

export interface UserState {
  isLoading: boolean;
  error: string | null;
  // data: null;
}

const defaultUserState: UserState = {
  isLoading: false,
  error: null,
  // data: null,
};

const reducer = (state = defaultUserState, action: UserGetActionTypes): UserState => {
  switch (action.type) {
    case USER_GET:
      return { ...state, isLoading: true, error: defaultUserState.error };
    case USER_GET_SUCCESS:
      return { ...state, isLoading: false /* data: action.data */ };
    case USER_GET_ERROR:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
