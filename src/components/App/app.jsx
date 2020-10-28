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

const App = ({offersList, currentOffersList, reviewsList}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainScreen/>;
        </Route>
        <Route exact path='/login'>
          <Login />;
        </Route>
        <Route exact path='/favorites' render={() => <Favorites offers={offersList.filter(({isFavorite}) => isFavorite)}/>}/>
        <Route exact path='/offer/:id'
          render={(routeProps) =>
            <Room
              routeProps={routeProps}
              allOffers={offersList}
              offers={currentOffersList}
              reviews={reviewsList}
            />}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersList: PropTypes.arrayOf(offerTypes).isRequired,
  currentOffersList: PropTypes.arrayOf(offerTypes).isRequired,
  reviewsList: PropTypes.arrayOf(reviewTypes).isRequired,
};

const mapStateToProps = (state) => ({
  offersList: state.offersList,
  reviewsList: state.reviewsList,
  currentOffersList: state.currentOffersList,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
