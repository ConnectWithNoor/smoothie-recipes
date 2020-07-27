import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { HOST, INFORMATION } from '../contansts/end-points';
import { AuthContext } from '../context/Auth';
import { handleAddFavourite } from '../util/functions';

const RecipeView = () => {
  const { id } = useParams();
  const { Auth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchRecipiesWithIngrediants = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `${HOST}/${id}/${INFORMATION}?apiKey=${process.env.REACT_APP_API_TOKEN}`
        );

        if (response.status !== 200) {
          return setError('Something Went Wrong');
        }

        setIngredients(response.data);

        return;
      } catch (error) {
        console.log('error', error);
        return setError('Something Went Wrong');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipiesWithIngrediants();
  }, [id]);

  return (
    <>
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
        <div className='recipe-view'>
          <div className='img-wrapper'>
            <img
              className='recipe-img'
              src={`${ingredients.image}`}
              alt='smoothie'
            />

            <img
              className='fav-icon'
              src={require('../assets/images/heart-fav.png')}
              alt='heart'
              onClick={() => handleAddFavourite(Auth)}
            />
          </div>

          <p className='recipe-title'>{ingredients.title}</p>

          <ul className='recipe-ingredients'>
            {ingredients?.extendedIngredients?.map((ing, index) => (
              <li key={ing.id}>
                {index + 1} - {ing.originalName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default RecipeView;
