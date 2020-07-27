import React from 'react';

const RecipeView = () => {
  return (
    <div className='recipe-view'>
      <div className='img-wrapper'>
        <img
          className='recipe-img'
          src={require('../assets/images/smoothie.png')}
          alt='smoothie'
        />
      </div>

      <p className='recipe-title'>Bablish Apple Pie Smoothie</p>

      <ul className='recipe-ingredients'>
        <li>1 - Almond</li>
        <li>2 - Almond</li>
        <li>3 - Almond</li>
        <li>4 - Almond</li>
      </ul>
    </div>
  );
};

export default RecipeView;
