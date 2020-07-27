import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Component/Header';
import LoadingImage from './Component/LoadingImage';
import './App.css';

const Home = lazy(() => import('./page/Home'));
const Favourites = lazy(() => import('./page/Favourites'));
const Login = lazy(() => import('./page/Login'));
const Register = lazy(() => import('./page/Register'));
const RecipeView = lazy(() => import('./page/Recipe-view'));

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Suspense fallback={<LoadingImage />}>
            <Route exact path='/' component={Home} />
            <Route path='/favourites' component={Favourites} />
            <Route path='/login' component={Login} />
            <Route path='/Register' component={Register} />
            <Route exact path='/recipes' component={Home} />
            <Route path='/recipes/:id' component={RecipeView} />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
