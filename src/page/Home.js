import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import RecipeCard from '../Component/RecipeCard';
import { HOST, RECIPELIST } from '../contansts/end-points';

import { RecipesListContext } from '../context/RecipesList';

const Home = () => {
  const { setRecipesList } = useContext(RecipesListContext);

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
        await setRecipesList(response.data.results);
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
          <img
            src={require('../assets/images/loader.gif')}
            alt='loader'
            width='100'
            height='100'
            className='center'
          />
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
