import { store } from "store";
import { IMG_BASE_URL } from "./consts";

export const formatVoteCount = (voteCount) => {
  if (voteCount >= 1000000) {
    return '(' + (voteCount / 1000000).toFixed(1) + 'M)';
  } else if (voteCount >= 1000) {
    return '(' + (voteCount / 1000).toFixed(1) + 'K)';
  } else {
    return '(' + voteCount + ')';
  }
};

export const getImage = (path, width) => {
  return IMG_BASE_URL + width + path
}

export const formatGenresByID = (genresIds) => {
  if (genresIds.length === 0) {
    return 'No genres'
  }
  const genres = store.getState().movie.genresList
  const findGenreByID = (id) => {
    return genres.find(genre => genre.id === id)
  }
  return genresIds.map(id => findGenreByID(id).name).join(', ')
}

export const formatGenres = (genres) => {
  return genres.map(genre => genre.name).join(', ')
}


//from YYYY-MM-DD to MMMM D, YYYY 
export const formatDate = (date) => {
  let day = date.substr(-2), month = date.substr(5, 2), year = date.substr(0, 4)
  switch(month) {
    case '01': 
      month = 'January';
      break;
    case '02': 
      month = 'February';
      break;
    case '03': 
      month = 'March';
      break;
    case '04': 
      month = 'April';
      break;
    case '05': 
      month = 'May';
      break;
    case '06': 
      month = 'June';
      break;
    case '07': 
      month = 'July';
      break;
    case '08': 
      month = 'August';
      break;
    case '09': 
      month = 'September';
      break;
    case '10': 
      month = 'October';
      break;
    case '11': 
      month = 'November';
      break;
    case '12': 
      month = 'December';
      break;
    default: 
  }
  
  return `${month} ${parseInt(day)}, ${year}`
}

export const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return `${hours}h ${remainingMinutes < 10 ? '0' : ''}${remainingMinutes}m`
}

export const findTrailer = (videos) => {
  let trailer = videos.find(video => video.site === 'YouTube' && video.official && video.type === 'Trailer')
  if (!trailer) {
    trailer = videos.find(video => video.site === 'YouTube')
  }
  return trailer
}