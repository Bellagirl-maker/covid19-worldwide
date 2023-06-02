import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://disease.sh/v3/covid-19/countries';

const initialState = {
  data: [],
  Loading: false,
  singleItem: {},
};

export const fetchCountries = createAsyncThunk('countries/getCountries', async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const singleCountry = createAsyncThunk('country/getCountry', async ({ country }) => {
  try {
    const response = await axios.get(`${baseURL}/${country}`);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.Loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.data = [...action.payload];
        state.Loading = false;
      })
      .addCase(singleCountry.fulfilled, (state, action) => {
        state.Loading = false;
        state.singleItem = action.payload;
      });
  },

});

export default countriesSlice.reducer;
