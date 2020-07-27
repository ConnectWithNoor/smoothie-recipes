import React, { createContext, useState } from 'react';

export const RecipesListContext = createContext();

const RecipesListProvider = ({ children }) => {
  const [recipesList, setRecipesList] = useState(null);

  return (
    <RecipesListContext.Provider value={{ recipesList, setRecipesList }}>
      {children}
    </RecipesListContext.Provider>
  );
};

export default RecipesListProvider;
