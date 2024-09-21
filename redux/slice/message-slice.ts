// entriesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../store/store' // make sure to import RootState from your store file

export interface Entry {
  id: number
  name: string
  message: string
  createdAt?: string
}

interface EntriesState {
  entries: Entry[]
  loading: boolean
  error: string | null
}

const initialState: EntriesState = {
  entries: [],
  loading: false,
  error: null,
}

// Async thunk actions
export const fetchEntries = createAsyncThunk<Entry[]>('entries/fetchEntries', async () => {
  const response = await axios.get('/api/entries')
  return response.data
})

export const createEntry = createAsyncThunk<Entry, Entry>('entries/createEntry', async (entry: Entry) => {
  const response = await axios.post('/api/entries', entry)
  return response.data
})

// Slice
const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEntries.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchEntries.fulfilled, (state, action: PayloadAction<Entry[]>) => {
        state.entries = action.payload
        state.loading = false
      })
      .addCase(fetchEntries.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Could not fetch entries.'
      })
      .addCase(createEntry.fulfilled, (state, action: PayloadAction<Entry>) => {
        state.entries.push(action.payload)
      })
  },
})

export const selectAllEntries = (state: RootState) => state.entries.entries
export const selectIsLoading = (state: RootState) => state.entries.loading
export const selectError = (state: RootState) => state.entries.error

export default entriesSlice.reducer
