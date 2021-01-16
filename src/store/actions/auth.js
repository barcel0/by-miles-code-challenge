import { getUserPolicy } from './user';
export const LOG_IN_SUCCESS = 'LOGIN_SUCCESS';
export const LOG_IN_FAIL = 'LOG_IN_FAIL';

export const logIn = (email, password) => async dispatch => {
  try {
    const fetchResponse = await fetch('https://api.bybits.co.uk/auth/token', {
      method: 'POST',
      headers: {
        'environment': 'mock',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const loginData = await fetchResponse.json();
    console.log(loginData);//debug
    const { access_token } = loginData;
    dispatch(getUserPolicy(access_token));
  } catch (err) {
    console.log(err);//error handling pending
  }

}