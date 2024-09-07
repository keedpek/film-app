import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Loader } from '@mantine/core';
import ListItem from 'components/ListItem';
import classes from './MovieList.module.css'

const MovieList = ({movies, isLoaded}) => {
  const genres = useSelector(state => state.movie.genresList)
  const [ratedMovies, setRatedMovies] = useState(JSON.parse(localStorage.getItem('rated_movies')) || []);

  useEffect(() => {
    const storedRatedMovies = JSON.parse(localStorage.getItem('rated_movies')) || [];
    setRatedMovies(storedRatedMovies);
  }, []);

  const updateRatedMovies = (updatedMovies) => {
    setRatedMovies(updatedMovies);
    localStorage.setItem('rated_movies', JSON.stringify(updatedMovies)); 
  };
  
  if (!isLoaded || genres.length === 0) {
    return (
      <Loader className={classes.loader}/>
    )
  }
  
  return (
    <Grid>
      {movies.map((movie, index) => 
      <Grid.Col key={index} span={6}>
        <ListItem 
          movie={movie} 
          ratedMovie={ratedMovies.find(item => item.id === movie.id)} 
          updateRatedMovies={updateRatedMovies}
          ratedMovies={ratedMovies}
        />
      </Grid.Col>
      )}
    </Grid>
  );
}

export default MovieList;
