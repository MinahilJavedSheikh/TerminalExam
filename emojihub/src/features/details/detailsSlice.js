import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDetailsData = createAsyncThunk(
  'details/fetchDetailsData',
  async (category) => {
    const response = await axios.get(`https://emojihub.yurace.pro/api/random/${category}`);
    return response.data;
  }
);

  const detailsSlice = createSlice({
    name: 'details',
    initialState: {
      data: null, // or an empty object, depending on your use case
      status: 'idle',
      error: null,
    },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDetailsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchDetailsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default detailsSlice.reducer;
