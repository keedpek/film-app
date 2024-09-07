import React from 'react';
import FiltersSelect from 'components/Select';
import { setSorting } from 'store/Slices/querySlice';
import classes from './Sort.module.css'

const Sort = () => {
  const sortOptions = [
    {value: 'original_title.asc', label: 'Original title (A-Z)'},
    {value: 'original_title.desc', label: 'Original title (Z-A)'},
    {value: 'popularity.asc', label: 'Popularity (Low to high)'},
    {value: 'popularity.desc', label: 'Popularity (High to low)'},
    {value: 'revenue.asc', label: 'Revenue (Low to high)'},
    {value: 'revenue.desc', label: 'Revenue (High to low)'},
    {value: 'primary_release_date.asc', label: 'Release date (Oldest first)'},
    {value: 'primary_release_date.desc', label: 'Release date (Newest first)'},
    {value: 'title.asc', label: 'Title (A-Z)'},
    {value: 'title.desc', label: 'Title (Z-A)'},
    {value: 'vote_average.asc', label: 'Rating (Low to high)'},
    {value: 'vote_average.desc', label: 'Rating (High to low)'},
    {value: 'vote_count.asc', label: 'Vote count (Low to high)'},
    {value: 'vote_count.desc', label: 'Vote count (High to low)'},
  ]

  return (
    <div className={classes.wrapper}>
      <FiltersSelect 
        options={sortOptions} 
        label='Sort by' 
        placeholder='Select atribute' 
        storeParam='sort_by' 
        action={setSorting}
      />
    </div>
  );
};

export default Sort;
