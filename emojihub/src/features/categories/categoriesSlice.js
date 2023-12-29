
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCatData = createAsyncThunk('home/fetchCatData', async () => {
  const response = await axios.get('https://emojihub.yurace.pro/api/all');
  return response.data;
});

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCatData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCatData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
