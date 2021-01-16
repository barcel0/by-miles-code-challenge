import { LOG_IN_SUCCESS, LOG_IN_FAIL } from '../actions/auth';

const initialState = {
  isAuthenticated: false,
  token: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return { ...state, isAuthenticated: true, token: action.payload };
    case LOG_IN_FAIL:
      return { ...state, isAuthenticated: false, token: null };
    default:
      return state;
  }
}

export default authReducer;