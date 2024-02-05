// store/store.ts
import { combineReducers, createStore } from 'redux'
import authReducer from './reducers/auth'
import messagesReducer from './reducers/messages'

const rootReducer = combineReducers({
  auth: authReducer,
  messages: messagesReducer,
})

const store = createStore(rootReducer)

export default store
