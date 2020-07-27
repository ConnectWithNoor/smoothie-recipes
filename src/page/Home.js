import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RecipeCard from '../Component/RecipeCard';
import { HOST, RECIPELIST } from '../contansts/end-points';
import LoadingImage from '../Component/LoadingImage';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipies = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `${HOST}${RECIPELIST}?query=healthy%20smoothie&type=${process.env.REACT_APP_TYPE}&fillIngredients=true&apiKey=${process.env.REACT_APP_API_TOKEN}`
        );

        if (response.status !== 200) {
          return setError('Something Went Wrong');
        }
        setRecipes(response.data.results);

        return;
      } catch (error) {
        console.log('error', error);
        return setError('Something Went Wrong');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipies();
  }, []);

  return (
    <div className='home'>
      <div className='container'>
        {isLoading ? (
          <LoadingImage />
        ) : error ? (
          <p className='center error-message'> {error}</p>
        ) : (
          <div className='flex'>
            {recipes.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
