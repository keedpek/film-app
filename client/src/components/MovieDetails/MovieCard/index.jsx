import React from 'react';
import classes from './MainInfo.module.css'
import { getImage, formatGenres, formatVoteCount, formatDate, formatDuration } from 'utils/functions';
import { POSTER_SIZES } from 'utils/consts';
import yellowStar from 'assets/yellowStar.svg'
import grayStar from 'assets/grayStar.svg'
import purpleStar from 'assets/purpleStar.svg'
import posterPlaceholder from 'assets/posterPlaceholder.svg'
import { Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import RatingModal from 'components/RatingModal';
import { useSelector } from 'react-redux';


const MovieCard = ({movie}) => {
  const ratedMovie = useSelector(state => state.movie.ratedMovies.find(item => item.id === movie.id))

  const [opened, {open, close}] = useDisclosure(false)

  const rateClickHandler = () => {
    open()
  }
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>

        <img className={classes.poster} src={ movie.poster_path ? getImage(movie.poster_path, POSTER_SIZES.XL) : posterPlaceholder} alt='poster'/>
        
        <div className={classes.info} >
          <div className={classes.textInfo}>
            <span className={classes.title}>{movie.title}</span>
            <span className={classes.grayText}>{movie.release_date.substr(0, 4)}</span>
            <div className={classes.voteContainer}>
              <div className={classes.vote} >
                <img src={yellowStar} alt=''/>
                <span className={classes.avgVote}>{movie.vote_average.toFixed(1)}</span>
              </div>
              <span className={classes.grayText}>{formatVoteCount(movie.vote_count)}</span>
            </div>
          </div>
          <div className={classes.description}>
            <div className={classes.descriptionRow}>
              <span className={classes.grayText}>Duration</span>
              <span>{formatDuration(movie.runtime)}</span>
            </div>
            <div className={classes.descriptionRow}>
              <span className={classes.grayText}>Premiere</span>
              <span>{formatDate(movie.release_date)}</span>
            </div>
            <div className={classes.descriptionRow}>
              <span className={classes.grayText}>Budget</span>
              <span>{'$' + movie.budget.toLocaleString('en-US')}</span>
            </div>
            <div className={classes.descriptionRow}>
              <span className={classes.grayText}>Gross worldwide</span>
              <span>{'$' + movie.revenue.toLocaleString('en-US')}</span>
            </div>
            <div className={classes.descriptionRow}>
              <span className={classes.grayText}>Genres</span>
              <span>{formatGenres(movie.genres)}</span>
            </div>
          </div>
        </div>
      </div>
      <button className={classes.rateBtn} onClick={rateClickHandler}>
          <Image src={ratedMovie ? purpleStar : grayStar} />
      </button>
      {ratedMovie && <span>{ratedMovie.user_rate}</span>}

      <RatingModal 
        opened={opened} 
        onClose={close} 
        movie={movie} 
        defaultRating={ratedMovie ? ratedMovie.user_rate : 0}
      />
    </div>
  );
};

export default MovieCard;
