import React from 'react';
import classes from './Filters.module.css';
import Genres from './Genres';
import Year from './Year';
import Rating from './Rating';
import { useDispatch } from 'react-redux';
import { resetFilters } from 'store/Slices/querySlice';

const Filters = () => {
  const dispatch = useDispatch()
  const resetHandler = () => {
    dispatch(resetFilters())
  }

  return (
    <div className={classes.filtersContainer}>
      <div className={classes.filterWrapper}>
        <Genres/>
      </div>
      <div className={classes.filterWrapper}>
        <Year/>
      </div>
      <div className={classes.filterWrapper}>
        <Rating/>
      </div>
      <button className={classes.reset} onClick={resetHandler}>Reset filters</button>
    </div>
  );
};


export default Filters;
