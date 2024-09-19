/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import AppRouter from "./routes/AppRouter";
import { fetchGenres } from "http/moviesAPI";
import "./App.css"
import { setGenres, setRatedMovies } from "store/Slices/movieSlice";

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetchGenres().then(data => {
      dispatch(setGenres(data.genres))
    })
    dispatch(setRatedMovies(JSON.parse(localStorage.getItem('rated_movies'))))
  }, [])

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
