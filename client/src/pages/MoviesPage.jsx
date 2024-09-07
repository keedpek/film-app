/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, Group } from '@mantine/core';
import { setPage } from 'store/Slices/querySlice';
import { setMovies } from 'store/Slices/movieSlice';
import { fetchMovies } from 'http/moviesAPI';
import NavBar from 'components/NavBar'
import MovieList from 'components/MovieList';
import Filters from 'components/Filters';
import Sort from 'components/Sort';
import EmptyState from 'components/EmptyState';
import CustomPagination from 'components/Pagination';
import emptyStateIcon from 'assets/moviesEmptyState.svg'


const MoviesPage = () => {
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movie.movieList)
  const queryParams = useSelector(state => state.query.params)
  const [isLoaded, setIsLoaded] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  
  useEffect(() => {
    setIsLoaded(false)
    fetchMovies(queryParams).then(data => {
      if (data.total_pages < 500) {
        setTotalPages(data.total_pages)
      } else {
        setTotalPages(500) //max valid page in TMDB
      }
      dispatch(setMovies(data.results))
      setIsLoaded(true)
    })
  }, [queryParams])

  const changePageHandler = (value) => {
    dispatch(setPage(value))
  }

  return (
    <>
      <NavBar />
      <Flex h='fit-content' direction='column' p='1% 6%' ml='19.4%' gap='24px'>
        <h1>Movies</h1>
        <Filters />
        <Sort />
        {isLoaded && movies.length === 0 ? (
          <EmptyState icon={emptyStateIcon} text="We don't have such movies, look for another one"/>
        ) : (
          <>
            <MovieList movies={movies} isLoaded={isLoaded}/>
            <Group justify='flex-end'>
              <CustomPagination total={totalPages} value={queryParams.page} onChange={changePageHandler}/>
            </Group>
          </>
        )
        }
      </Flex>
    </>
  )
};

export default MoviesPage;
