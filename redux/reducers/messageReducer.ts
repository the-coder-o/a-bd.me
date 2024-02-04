import { ADD_MESSAGE } from '../actions'

const initialState = {
  messages: [],
}

const messageReducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }
    default:
      return state
  }
}

export default messageReducer
