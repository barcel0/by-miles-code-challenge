import { SET_ERROR, SET_LOADING } from '../actions/api';

const initialState = {
  error: null,
  loading: false
}

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export default apiReducer;