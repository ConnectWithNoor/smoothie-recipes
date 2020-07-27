import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { handleAddFavourite } from '../util/functions';

import { AuthContext } from '../context/Auth';

const RecipeCard = ({ recipe }) => {
  const { Auth } = useContext(AuthContext);
  return (
    <div className='card'>
      <Link to={`/recipes/${recipe.id}`}>
        <div className='img-wrapper'>
          <img className='recipe-img' src={`${recipe.image}`} alt='smoothie' />
          <img
            className='fav-icon'
            src={require('../assets/images/heart-fav.png')}
            alt='heart'
            onClick={() => handleAddFavourite(Auth)}
          />
        </div>

        <p className='recipe-title'>{recipe.title}</p>
      </Link>
    </div>
  );
};

export default RecipeCard;
