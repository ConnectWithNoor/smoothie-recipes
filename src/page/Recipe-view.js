import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { HOST, INFORMATION } from '../contansts/end-points';

const RecipeView = () => {
  const { id } = useParams();
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

        console.log(response);

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

  console.log('123', ingredients);

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
