import React, { useState } from 'react';
import classes from './Modal.module.css'
import { Group, Modal, Rating, Button } from '@mantine/core';

const RatingModal = ({opened, onClose, movie, defaultRating, updateRatedMovies, ratedMovies}) => {
  const [rating, setRating] = useState(defaultRating)

  const handleRatingSave = (id, rate) => {
    let updatedMovies = [...ratedMovies];
    const movieIndex = updatedMovies.findIndex(film => film.id === id);

    if (movieIndex !== -1) {
      updatedMovies[movieIndex].user_rate = rate;
    } else {
      updatedMovies.push({
        id: id,
        user_rate: rate
      });
    }

    updateRatedMovies(updatedMovies); 
    onClose();
  }

  const handleRatingRemove = (id) => {
    let updatedMovies = ratedMovies.filter(film => film.id !== id)
    updateRatedMovies(updatedMovies); 
    setRating(0)
    onClose();
  }

  return (    
    <Modal opened={opened} onClose={onClose} title='Your rating' classNames={{body: classes.body, inner: classes.inner, header: classes.header, overlay: classes.overlay}}>
      <span className={classes.title}>{movie.title}</span>
      <Rating size='30px' count='10' defaultValue={defaultRating} onChange={setRating} classNames={{root: classes.starsContainer}} />
      <Group>
        <Button color='#9854F6' radius='8px' onClick={() => {handleRatingSave(movie.id, rating)}}>Save</Button>
        <Button onClick={() => {handleRatingRemove(movie.id)}}>Remove rating</Button>
      </Group>
    </Modal>
  );
};

export default RatingModal;
