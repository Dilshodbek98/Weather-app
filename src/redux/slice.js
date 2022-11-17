import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchData", async (payload) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${payload.location}&appid=c45820d02dd0bb27b1ee6009c82ad573`
  )
    .then((res) => res ? res.json() : {} )
});

export const slice = createSlice({
  name: "data",
  initialState: {
    status: null,
    data: {},
    error: "",
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },

    [fetchData.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export default slice.reducer;
