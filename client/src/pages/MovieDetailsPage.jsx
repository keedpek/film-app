/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Anchor, Breadcrumbs, Center, Flex, Loader, Text } from '@mantine/core';
import Navbar from 'components/NavBar';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'http/moviesAPI';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentMovie } from 'store/Slices/movieSlice';
import MovieCard from 'components/MovieDetails/MovieCard';
import MovieDescription from 'components/MovieDetails/MovieDescription';

const Movie = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currMovie = useSelector(store => store.movie.currentMovie)
  const genres = useSelector(state => state.movie.genresList)

  useEffect(() => {
    fetchMovieDetails(id).then(data => {
      if (data.status_code) {
        navigate('/404')
      }
      dispatch(setCurrentMovie(data))
      setIsLoaded(true)
    })
  }, [])

  return (
    <div style={{height: '100%'}}>
      <Navbar/>
      {(isLoaded && genres.length !== 0) ? (
        <Flex direction='column' ml='19.4%' p='3% 13%' gap='20px'>
          <Breadcrumbs separatorMargin='10px'>
            <Anchor onClick={() => {navigate('/')}}><Text c='#9854F6' size='14px'>Movies</Text></Anchor>
            <Anchor><Text c='#9854F6' size='14px'>{currMovie.title}</Text></Anchor>
          </Breadcrumbs>
          <MovieCard movie={currMovie} />
          <MovieDescription movie={currMovie}/> 
        </Flex>
      ) : (
        <Center w='100%' h='100%'>
          <Loader/>  
        </Center>
      )
      }
    </div>
  );
};

export default Movie;
