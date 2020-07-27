import React from 'react';

import RecipeCard from '../Component/RecipeCard';

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <div className='home-flex'>
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

export default Home;
