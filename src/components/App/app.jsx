import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {offerTypes, reviewTypes} from '../../types';

import MainScreen from '../main-screen/main-screen';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';

const App = ({offers, reviews, cities}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainScreen
            offers={offers}
            cities={cities}
          />;
        </Route>
        <Route exact path='/login'>
          <Login />;
        </Route>
        <Route exact path='/favorites' render={() => <Favorites offers={offers.filter(({isFavorite}) => isFavorite)}/>}/>
        <Route exact path='/offer/:id' render={(routeProps) => <Room routeProps={routeProps} offers={offers} reviews={reviews}/>}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewTypes).isRequired,
  cities: PropTypes.array.isRequired,
};

export default App;
