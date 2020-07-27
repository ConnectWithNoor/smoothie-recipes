import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className='card'>
      <Link to={`/recipes/${recipe.id}`}>
        <div className='img-wrapper'>
          <img className='recipe-img' src={`${recipe.image}`} alt='smoothie' />
        </div>

        <p className='recipe-title'>{recipe.title}</p>
      </Link>
    </div>
  );
};

export default RecipeCard;
