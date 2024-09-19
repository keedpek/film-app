import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Loader } from '@mantine/core';
import ListItem from 'components/ListItem';
import classes from './MovieList.module.css'

const MovieList = ({movies, isLoaded}) => {
  const genres = useSelector(state => state.movie.genresList)
  
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
        />
      </Grid.Col>
      )}
    </Grid>
  );
}

export default MovieList;
