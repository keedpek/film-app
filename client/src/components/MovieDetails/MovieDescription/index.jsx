import React from 'react';
import classes from './description.module.css'
import { Divider } from '@mantine/core';
import { findTrailer, getImage } from 'utils/functions';
import { LOGO_SIZES } from 'utils/consts';
import clapperboard from 'assets/clapperboard.svg' 

const MovieDescription = ({movie}) => {
  const trailer = findTrailer(movie.videos.results) 

  return (
    <div className={classes.wrapper}>
      <h3>Trailer</h3>
      {trailer ? (
        <iframe 
          className={classes.trailer}
          src={`https://www.youtube.com/embed/${trailer.key}`} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
        />
      ) : (
        <h4>Can't find trailer</h4>
      )
      }
      <Divider my='md'/>
      <h3>Description</h3>
      <span>{movie.overview}</span>
      <Divider my='md'/>
      <h3>Production</h3>
      {
        movie.production_companies.length ? (
          <div className={classes.companiesContainer}>
            {movie.production_companies.map(company => 
              <div className={classes.companyRow}>
                <div className={classes.logoWrap}>
                  <img className={classes.logo} src={company.logo_path ? getImage(company.logo_path, LOGO_SIZES.XXL) : clapperboard} alt=''/>
                </div>
                <span>{company.name}</span>
              </div>
            )}
          </div>
        ) : (
          <h4>Unknown</h4>
        )
      }
      
    </div>
  );
};

export default MovieDescription;
