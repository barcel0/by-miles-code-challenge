const initialState = {
  error: null,
  isAuthenticated: false,
  token: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default authReducer;