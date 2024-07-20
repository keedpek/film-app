import React, { useContext } from 'react';
import { Context } from '../../index'
import { observer } from 'mobx-react-lite';

const MovieList = observer(() => {
  const AppStore = useContext(Context)

  
  return (
    <div>
      
    </div>
  );
})

export default MovieList;
