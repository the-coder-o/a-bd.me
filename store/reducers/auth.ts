// store/reducers/auth.ts
const initialState = {
  user: null,
}

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, user: action.payload }
    default:
      return state
  }
}

export default authReducer
