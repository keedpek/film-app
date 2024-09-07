import { configureStore, combineReducers } from "@reduxjs/toolkit";
import movieSlice from "./Slices/movieSlice";
import querySlice from "./Slices/querySlice";


const rootReducer = combineReducers({
  movie: movieSlice,
  query: querySlice
})

export const store = configureStore({
  reducer: rootReducer,     
})