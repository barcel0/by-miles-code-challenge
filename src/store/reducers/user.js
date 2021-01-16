import { SET_USER_POLICY_DETAILS } from '../actions/user';

const initialState = {
  policyDetails: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_POLICY_DETAILS:
      return { ...state, policyDetails: { ...action.payload } }
    default:
      return state;
  }
}

export default userReducer;