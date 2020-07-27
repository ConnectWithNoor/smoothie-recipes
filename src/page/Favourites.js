import React from 'react';

import RecipeCard from '../Component/RecipeCard';

const Favourites = () => {
  return (
    <div className='Favourites'>
      <div className='container'>
        <div className='flex'>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  );
};

export default Favourites;
