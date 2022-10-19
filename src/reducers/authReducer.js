import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants';

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return { loading: false, user: payload.user, isAuthenticated: true };
    case USER_LOGIN_FAIL:
      return { loading: false, error: payload, user: null };
    case USER_LOGOUT:
      localStorage.removeItem('token');
      return { loading: false, user: null, error: null };
    default:
      return state;
  }
};

export { authReducer };
