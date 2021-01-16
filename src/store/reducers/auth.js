import { LOG_IN_SUCCESS, LOG_IN_FAIL } from '../actions/auth';

const initialState = {
  authenticated: false,
  token: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return { ...state, authenticated: true, token: action.payload };
    case LOG_IN_FAIL:
      return { ...state, authenticated: false, token: null };
    default:
      return state;
  }
}

export default authReducer;