const initialState = {
  user: null,
  isAuthenticated: false,
  error: false,
  token: null,
  loading: false,
}


export default function(state = initialState, action) {

  switch (action.type) {
    case "LOGOUT_ACTION":
      return {
        user: null,
        isAuthenticated: false,
        error: false,
        token: null
      }
    case "LOGIN_ACTION":
      return {
        ...state,
        isAuthenticated: true
      }  
    default:
      return state;
  }
}