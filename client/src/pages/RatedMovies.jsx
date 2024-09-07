import React, { useEffect, useState } from 'react';
import { Flex, Group, Button, Stack } from '@mantine/core';
import NavBar from 'components/NavBar';
import MovieList from 'components/MovieList';
import EmptyState from 'components/EmptyState';
import CustomPagination from 'components/Pagination';
import emptyStateIcon from 'assets/ratedMoviesEmptyState.svg'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const RatedMovies = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()
  const movies = useSelector(state => state.movie.ratedMovies)

  useEffect(() => {
    setIsLoaded(false)
    //get rated movies from localStorage
    //setTotalPages(Math.floor(movies.length / 4))
    setIsLoaded(true)
  }, [])

  const changePageHandler = (value) => {
    setCurrentPage(value)
  }

  return (
    <>
      <NavBar />
      <Flex h='fit-content' direction='column' p='1% 6%' ml='19.4%' gap='24px'>
        {isLoaded && true /*movies.length === 0*/ ? (
          <Stack align='center' justify='center' h={'100vh'}>
            <EmptyState icon={emptyStateIcon} text="You haven't rated any films yet"/>
            <Button w={'15%'} color='#9854F6' radius='8px' onClick={() => {navigate('/')}} >Find Movies</Button>
          </Stack>
        ) : (
          <>
            <MovieList movies={movies} isLoaded={false}/>
            <Group justify='flex-end'>
              <CustomPagination total={totalPages} value={currentPage} onChange={changePageHandler}/>
            </Group>
          </>
        )
        }
      </Flex>
    </>
  );
};

export default RatedMovies;
