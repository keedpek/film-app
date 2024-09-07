import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movieList: [],
    currentMovie: null,
    genresList: [],
    ratedMovies: []
  },
  reducers: {
    setMovies(state, action) {
      state.movieList = action.payload
    },
    setCurrentMovie(state, action) {
      state.currentMovie = action.payload
    },
    setGenres(state, action) {
      state.genresList = action.payload
    },
    setRatedMovies(state, action) {
      state.ratedMovies = action.payload
    }
  }
})

export default movieSlice.reducer
export const { setMovies, setCurrentMovie, setGenres, setRatedMovies } = movieSlice.actions