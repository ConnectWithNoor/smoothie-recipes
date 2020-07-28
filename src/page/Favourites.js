import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import RecipeCard from '../Component/RecipeCard';
import { AuthContext } from '../context/Auth';
import { getFavourites } from '../util/functions';
import LoadingImage from '../Component/LoadingImage';
import { HOST, BULK_INFORMATION } from '../contansts/end-points';

const Favourites = () => {
  const { Auth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getFav = async () => {
      setIsLoading(true);
      try {
        const favRecipesId = await getFavourites(Auth);
        const recipesList = await axios.get(
          `${HOST}${BULK_INFORMATION}?ids=${favRecipesId.join()}&apiKey=${
            process.env.REACT_APP_API_TOKEN
          }`
        );
        if (recipesList.status !== 200) {
          return setError('Something Went Wrong');
        }
        setRecipes(recipesList.data);
        return;
      } catch (error) {
        console.log('error', error);
        if (error.message.includes(400)) {
          return setError('No Recipes Favourited Yet');
        }
        return setError('Something Went Wrong');
      } finally {
        setIsLoading(false);
      }
    };

    getFav();
  }, [Auth]);

  return (
    <div className='Favourites'>
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

export default Favourites;
