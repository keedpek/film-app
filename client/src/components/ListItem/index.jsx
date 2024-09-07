import React from 'react';
import classes from './ListItem.module.css'
import { Image } from '@mantine/core';
import { MOVIE_ROUTE, POSTER_SIZES } from 'utils/consts';
import yellowStar from 'assets/yellowStar.svg'
import grayStar from 'assets/grayStar.svg'
import purpleStar from 'assets/purpleStar.svg'
import posterPlaceholder from 'assets/posterPlaceholder.svg'
import { useNavigate } from 'react-router-dom';
import { formatGenresByID, formatVoteCount, getImage } from 'utils/functions';
import { useDisclosure } from '@mantine/hooks';
import RatingModal from 'components/RatingModal';

const ListItem = ({movie, ratedMovie, updateRatedMovies, ratedMovies}) => {
  const navigate = useNavigate()
  
  const [opened, {open, close}] = useDisclosure(false)
  
  const clickHandler = () => {
    navigate(MOVIE_ROUTE + '/' + movie.id)
  }

  const rateClickHandler = (event) => {
    event.stopPropagation()
    open()
  }
  return (
    <div>

      <div className={classes.card} onClick={clickHandler}>
        <div className={classes.content}>
          <Image className={classes.poster} src={getImage(movie.poster_path, POSTER_SIZES.XL)} fallbackSrc={posterPlaceholder} />
          
          <div className={classes.info} >
            <div className={classes.textInfo}>
              <span className={classes.title}>{movie.title ? movie.title : 'No title'}</span>
              <span className={classes.grayText}>{movie.release_date ? movie.release_date.substr(0, 4) : "No date"}</span>
              <div className={classes.voteContainer}>
                <div className={classes.vote} >
                  <Image src={yellowStar} />
                  <span className={classes.avgVote}>{movie.vote_average ? movie.vote_average.toFixed(1) : 0}</span>
                </div>
                <span className={classes.grayText}>{movie.vote_count ? formatVoteCount(movie.vote_count) : 0}</span>
              </div>
            </div>
            <div className={classes.genres}>
              <span className={classes.grayText}>Genres</span>
              <span>{movie.genre_ids ? formatGenresByID(movie.genre_ids) : 'No genres'}</span>
            </div>
          </div>
        </div>
        <button className={classes.rateBtn} onClick={rateClickHandler}>
          <Image src={ratedMovie ? purpleStar : grayStar} />
        </button>
        {ratedMovie && <span>{ratedMovie.user_rate}</span>}
      </div>
      
      <RatingModal 
        opened={opened} 
        onClose={close} 
        movie={movie} 
        defaultRating={ratedMovie ? ratedMovie.user_rate : 0}
        updateRatedMovies={updateRatedMovies}
        ratedMovies={ratedMovies}
      />
    </div>
  );
};

export default ListItem;
