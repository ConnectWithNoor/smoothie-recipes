import React from 'react';

import { handleAddFavourite } from '../util/functions';

const RecipeCard = () => {
  return (
    <div className='card'>
      <div className='img-wrapper'>
        <img
          className='recipe-img'
          src={require('../assets/images/smoothie.png')}
          alt='smoothie'
        />
        <img
          className='fav-icon'
          src={require('../assets/images/heart-fav.png')}
          alt='heart'
          onClick={handleAddFavourite}
        />
      </div>

      <p className='recipe-title'>Bablish Apple Pie Smoothie</p>
    </div>
  );
};

export default RecipeCard;
