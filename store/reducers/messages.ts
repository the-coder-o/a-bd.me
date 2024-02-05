// store/reducers/messages.ts
const initialState = {
  messages: [],
}

const messagesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] }
    default:
      return state
  }
}

export default messagesReducer
