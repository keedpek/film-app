import { MOVIES_ROUTE, MOVIE_ROUTE, RATED_MOVIES_ROUTE } from "../utils/consts";
import Movies from "../pages/MoviesList/MoviesList"
import Movie from "../pages/MoviePage"
import RatedMovies from "../pages/RatedMovies"

export const routes = [
  {
    path: MOVIES_ROUTE,
    Component: Movies
  },
  {
    path: MOVIE_ROUTE + '/:id',
    Component: Movie
  },
  {
    path: RATED_MOVIES_ROUTE,
    Component: RatedMovies
  }
]