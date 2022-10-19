import axios from 'axios';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants';

const login = async (dispatch, loginCredentials) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  try {
    const res = await axios.post(
      'https://jobs-api.squareboat.info/api/v1/auth/login',
      {
        ...loginCredentials,
      }
    );
    const { data } = res.data;
    const user = { ...data };
    const token = data.token;

    dispatch({ type: USER_LOGIN_SUCCESS, payload: { user, token } });
  } catch (e) {
    const { message } = e.response.data;

    dispatch({ type: USER_LOGIN_FAIL, payload: message });
  }
};

const logout = (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  document.location.href = '/';
};

export { login, logout };
