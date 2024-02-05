// store/actions/auth.ts
export const loginUser = (user: any) => ({
  type: 'LOGIN_USER',
  payload: user,
})

// store/actions/messages.ts
export const addMessage = (message: any) => ({
  type: 'ADD_MESSAGE',
  payload: message,
})
