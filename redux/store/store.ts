import { configureStore } from '@reduxjs/toolkit'
import entriesReducer from '../slice/message-slice'
import subscribeReducer from '../slice/subscribe-slice'

export const store = configureStore({
  reducer: {
    entries: entriesReducer,
    subscribe: subscribeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
