import { getUserPolicy } from './user';
import { setError, setLoading } from './api';
export const LOG_IN_SUCCESS = 'LOGIN_SUCCESS';
export const LOG_IN_FAIL = 'LOG_IN_FAIL';

export const logIn = (email, password) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const fetchResponse = await fetch('https://api.bybits.co.uk/auth/token', {
      method: 'POST',
      headers: {
        'environment': 'mock',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const loginData = await fetchResponse.json();
    const { access_token } = loginData;
    dispatch({ type: LOG_IN_SUCCESS, payload: access_token });
    dispatch(getUserPolicy(access_token));
  } catch (err) {
    console.log(err)
    dispatch({ type: LOG_IN_FAIL });
    dispatch(setError('Something went wrong signing in.'))
    dispatch(setLoading(false));
  }
}