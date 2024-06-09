const fetch = require('node-fetch');


const buildApiUrl = (path, queryParams = {}) => {
  const query = new URLSearchParams({ ...queryParams, api_key: process.env.API_KEY });
  return `https://api.themoviedb.org/3${path}?${query}`;
};


async function MovieListController(req, res) {
  const url = buildApiUrl(process.env.MOVIE_LIST_ENDPOINT, req.query);
  try {
    const data = await fetch(url)
    .then(res => res.json())
    return data
  } catch (err) {
    console.log(err)
  }
} 


async function MovieDetailsController(req, res) {
  const {id} = req.params;
  const url = buildApiUrl(`${process.env.MOVIE_DETAILS_ENDPOINT}${id}`, {append_to_response: 'videos'});
  try {
    const data = await fetch(url)
    .then(res => res.json())
    return data
  } catch (err) {
    console.log(err)
  }
} 


async function GenresController(req, res) {
  const url = buildApiUrl(process.env.GENRES_LIST_ENDPOINT);
  try {
    const data = await fetch(url)
    .then(res => res.json())
    console.log(data);  
    return data
  } catch (err) {
    console.log(err)
  }
} 




module.exports = {MovieListController, MovieDetailsController, GenresController}