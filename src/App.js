import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './page/Home';
import Favourites from './page/Favourites';
import Login from './page/Login';
import Register from './page/Register';
import RecipeView from './page/Recipe-view';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/favourites' component={Favourites} />
          <Route path='/login' component={Login} />
          <Route path='/Register' component={Register} />
          <Route path='/recipes' component={RecipeView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
