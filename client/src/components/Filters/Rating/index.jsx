import React from 'react';
import { NumberInput } from '@mantine/core';
import classes from './Rating.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setMaxVote, setMinVote } from 'store/Slices/querySlice';

const Rating = () => {
  const dispatch = useDispatch()
  const min_rate = useSelector(store => store.query.params['vote_average.gte'])
  const max_rate = useSelector(store => store.query.params['vote_average.lte'])

  return (
    <div className={classes.container}>
      <NumberInput 
        classNames={{wrapper: classes.wrapper, input: classes.input, label: classes.label, control: classes.control, error: classes.error}}
        variant='filled'
        label='Rating'
        placeholder='from'
        min={0}
        max={10}
        clampBehavior="strict"
        allowNegative={false}
        value={min_rate === 0 ? '' : min_rate}
        onChange={(_value) => {dispatch(setMinVote(_value))}}
        error={min_rate > max_rate ? 'min rating must be less than max rating' : false}
      />
      <NumberInput 
        classNames={{wrapper: classes.wrapper, input: classes.input, label: classes.label, control: classes.control, error: classes.error}}
        variant='filled'
        placeholder='to'
        min={0}
        max={10}
        clampBehavior="strict"
        allowNegative={false}
        value={max_rate === 10 ? '' : max_rate}
        onChange={(_value) => {dispatch(setMaxVote(_value))}}
        error={min_rate > max_rate ? 'max rating must be grater than min rating' : false}
      />
    </div>
  );
};

export default Rating;
