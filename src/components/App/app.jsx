import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainScreen from '../main-screen/main-screen';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';

const App = ({offersCount}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainScreen offersCount={offersCount} />;
        </Route>
        <Route exact path='/login'>
          <Login />;
        </Route>
        <Route exact path='/favorites'>
          <Favorites />;
        </Route>
        <Route exact path='/offer/:id'>
          <Room />;
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
