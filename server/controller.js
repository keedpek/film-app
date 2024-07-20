const fetch = require('node-fetch');


const buildApiUrl = (path, queryParams = {}) => {
  const query = new URLSearchParams({ ...queryParams, api_key: process.env.API_KEY });
  return `https://api.themoviedb.org/3${path}?${query}`;
};


async function MovieListController(req, res) {
  const url = buildApiUrl(process.env.MOVIE_LIST_ENDPOINT, req.query);
  try {
    const response = await fetch(url)
    const data = await response.json()
    return res.json(data)
  } catch (err) {
    return {error: 'Failed to fetch movies'}
  }
} 


async function MovieDetailsController(req, res) {
  const {id} = req.params;
  const url = buildApiUrl(`${process.env.MOVIE_DETAILS_ENDPOINT}${id}`, {append_to_response: 'videos'});
  try {
    const response = await fetch(url)
    const data = await response.json()
    return res.json(data)
  } catch (err) {
    return {error: 'Failed to fetch movie details'}
  }
} 


async function GenresController(req, res) {
  const url = buildApiUrl(process.env.GENRES_LIST_ENDPOINT, req.query);
  try {
    const response = await fetch(url)
    const data = await response.json() 
    return res.json(data)
  } catch (err) {
    return {error: 'Failed to fetch genres list'}
  }
} 




module.exports = {MovieListController, MovieDetailsController, GenresController}