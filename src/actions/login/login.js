import { LOGIN_SUCCESS, LOGIN_ERROR} from  './types';

export function loginUserSuccess(data) {
  return { type: LOGIN_SUCCESS, data }
};

export function loginUserError(error) {
  return { type: LOGIN_ERROR, error }
};