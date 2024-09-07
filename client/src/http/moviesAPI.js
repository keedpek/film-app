import $movies from ".";

export const fetchMovies = async (queryParams = {}) => {
  const query = new URLSearchParams(queryParams)
  const {data} = await $movies.get(`movies?${query}`)
  return data
} 

export const fetchMovieDetails = async (id, language = 'en') => {
  const {data} = await $movies.get(`movie/${id}?language=${language}`)
  return data
}

export const fetchGenres = async (language = 'en') => {
  const {data} = await $movies.get(`genres?language=${language}`)
  return data
}