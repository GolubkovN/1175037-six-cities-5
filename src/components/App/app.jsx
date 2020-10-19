import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

import {offerTypes, reviewTypes} from '../../types';

import MainScreen from '../main-screen/main-screen';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';

const App = ({offers, offersList, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainScreen/>;
        </Route>
        <Route exact path='/login'>
          <Login />;
        </Route>
        <Route exact path='/favorites' render={() => <Favorites offers={offers.filter(({isFavorite}) => isFavorite)}/>}/>
        <Route exact path='/offer/:id' render={(routeProps) => <Room routeProps={routeProps} offers={offersList} reviews={reviews}/>}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersList: PropTypes.arrayOf(offerTypes).isRequired,
  offers: PropTypes.arrayOf(offerTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewTypes).isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  offersList: state.offersList,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  getOffers(question, answer) {
    dispatch(ActionCreator.getOffers(question, answer));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
