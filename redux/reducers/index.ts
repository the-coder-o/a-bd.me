import { combineReducers } from 'redux'
import authReducer from './authReducer'
import messageReducer from './messageReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  messages: messageReducer,
})

export default rootReducer
