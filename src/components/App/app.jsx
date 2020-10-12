import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {offerTypes} from '../../types';

import MainScreen from '../main-screen/main-screen';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';

const App = ({offers}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainScreen
            offers={offers}
          />;
        </Route>
        <Route exact path='/login'>
          <Login />;
        </Route>
        <Route exact path='/favorites'>
          <Favorites />;
        </Route>
        <Route exact path='/offer/:id'>
          <Room offer={offers[0]}/>;
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerTypes).isRequired,
};

export default App;
