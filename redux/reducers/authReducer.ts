import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions'

const initialState = {
  user: null,
}

const authReducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}

export default authReducer
