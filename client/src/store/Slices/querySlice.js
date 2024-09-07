import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  params: {
    page: 1,
    language: 'en-US',
    with_genres: '',
    primary_release_year: null,
    'vote_average.gte': 0,
    'vote_average.lte': 10,
    sort_by: ''
  }
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setPage(state, action) {
      state.params.page = action.payload
    },
    incrementPage(state) {
      state.params.page += 1
    },
    decrementPage(state) {
      state.params.page -= 1
    },
    setLanguage(state, action) {
      state.params.language = action.payload
    },
    setQueryGenres(state, action) {
      state.params.with_genres = action.payload
    },
    setYear(state, action) {
      state.params.primary_release_year = action.payload
    },
    setMinVote(state, action) {
      state.params["vote_average.gte"] = action.payload
    },
    setMaxVote(state, action) {
      state.params["vote_average.lte"] = action.payload
    },
    setSorting(state, action) {
      state.params.sort_by = action.payload
    },
    resetFilters(state) {
      const sort_by = state.params.sort_by
      state.params = {
        ...initialState.params,
        sort_by: sort_by
      }
    }
  }
})

export default querySlice.reducer
export const { setPage, incrementPage, decrementPage, setLanguage, setQueryGenres, setYear, setMinVote, setMaxVote, setSorting, resetFilters } = querySlice.actions