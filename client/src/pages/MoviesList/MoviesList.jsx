import React from 'react';
import { Group, Select, MultiSelect } from '@mantine/core';

const Movies = () => {
  const mokgenres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy' , 'History' , 'Horror' , 'Music' , 'Mystery' , 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']
  const mokyears = []
  for (let i = 1874; i < 2116; i++) mokyears.push(`${i}`)
  console.log(mokyears);

  return (
    <div>
      <Group justify="space-between">
        <h1>Movies</h1>
        <div>Search</div>
      </Group>
      <Group justify="space-between">
        <MultiSelect
          label="Genres"
          placeholder="Select genre"
          data={mokgenres}
        />
        <Select
          label="Release year"
          placeholder="Select release year"
          data={mokyears}
        />
        <Select
          label="Ratings"
          placeholder="From"
          data={['1', '2', '3', '4', '5']}
        />
        <Select
          placeholder="To"
          data={['1', '2', '3', '4', '5']}
        />
      </Group>
      <div>
        Sort
      </div>
      <div>
        Movie list
      </div>
      
    </div>
  );
};

export default Movies;
