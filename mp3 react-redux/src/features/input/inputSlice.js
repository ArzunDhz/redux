import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
 value:[],
 apiResponse:'',
 loading: true
};

export const FetchApi = createAsyncThunk("music/fetch", async (linkId ,thunkApi) => {

    const options = {
        method: "GET",
        url: "https://youtube-mp36.p.rapidapi.com/dl",
        params: { id: linkId},
        headers: {
          "X-RapidAPI-Key": 'dcc30b2b2fmshac3b7e241a8fc6cp1061bdjsn8937e7e638cb',
          "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
        },
      };
  return await axios.request(options).then((response) => response.data)
});





const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchApi.fulfilled, (state, action) => {
      state.value = action.payload;
      state.loading = true;
    })
    .addCase(FetchApi.pending, (state, action) => {
        state.loading = true;
      })
    .addCase(FetchApi.rejected, (state, action) => {
        state.loading = true;
      });
}
});

export default musicSlice.reducer;
