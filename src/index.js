import React from 'react';
import ReactDOM from 'react-dom';

import AuthProvider from './context/Auth';
import RecipesListProvider from './context/RecipesList';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <RecipesListProvider>
        <App />
      </RecipesListProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
