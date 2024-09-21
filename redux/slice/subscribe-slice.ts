// entriesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../store/store' // make sure to import RootState from your store file

export interface Subscribe {
  id: number
  user_email: string
}

interface EntriesState {
  subscribe: Subscribe[]
  loading: boolean
  error: string | null
}

const initialState: EntriesState = {
  subscribe: [],
  loading: false,
  error: null,
}

// Async thunk actions
export const fetchSubscribers = createAsyncThunk<Subscribe[]>('subscribers/fetchSubscribe', async () => {
  const response = await axios.get('/api/subscribe')
  return response.data
})

export const createSubscribe = createAsyncThunk<Subscribe, Subscribe>('subscribers/createSubscribe', async (entry: Subscribe) => {
  const response = await axios.post('/api/subscribe', entry)
  return response.data
})

// Slice
const entriesSlice = createSlice({
  name: 'subscribers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscribers.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchSubscribers.fulfilled, (state, action: PayloadAction<Subscribe[]>) => {
        state.subscribe = action.payload
        state.loading = false
      })
      .addCase(fetchSubscribers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Could not fetch entries.'
      })
      .addCase(createSubscribe.fulfilled, (state, action: PayloadAction<Subscribe>) => {
        state.subscribe.push(action.payload)
      })
  },
})

export const selectAllSubscribers = (state: RootState) => state.subscribe.subscribe
export const selectIsLoading = (state: RootState) => state.entries.loading
export const selectError = (state: RootState) => state.entries.error

export default entriesSlice.reducer
