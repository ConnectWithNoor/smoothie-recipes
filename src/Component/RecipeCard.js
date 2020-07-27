import React, { useContext } from 'react';

import { handleAddFavourite } from '../util/functions';

import { AuthContext } from '../context/Auth';

const RecipeCard = () => {
  const { Auth } = useContext(AuthContext);
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
          onClick={() => handleAddFavourite(Auth)}
        />
      </div>

      <p className='recipe-title'>Bablish Apple Pie Smoothie</p>
    </div>
  );
};

export default RecipeCard;
