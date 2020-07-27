import React from 'react';

const RecipeCard = () => {
  return (
    <div className='card'>
      <div className='img-wrapper'>
        <img
          className='recipe-img'
          src={require('../assets/images/smoothie.png')}
          alt='smoothie'
        />
      </div>

      <p className='recipe-title'>Bablish Apple Pie Smoothie</p>
    </div>
  );
};

export default RecipeCard;
