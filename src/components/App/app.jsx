import React from 'react';
import PropTypes from 'prop-types';
import {Router, Switch, Route} from 'react-router-dom';
import browserHistory from '../../browser-history';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {filterOffers} from '../../store/reducers/app-process/selectors';
import {offerTypes, reviewTypes} from '../../types';

import MainScreen from '../main-screen/main-screen';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import PrivateRoute from '../private-route/private-route';

const App = ({offersList, currentOffersList, reviewsList}) => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path='/'>
          <MainScreen/>;
        </Route>
        <Route exact path='/login'>
          <Login />;
        </Route>
        <PrivateRoute
          exact
          path='/favorites'
          render={() => <Favorites offers={offersList.filter(({isFavorite}) => isFavorite)}/>}/>
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
    </Router>
  );
};

App.propTypes = {
  offersList: PropTypes.arrayOf(offerTypes).isRequired,
  currentOffersList: PropTypes.arrayOf(offerTypes).isRequired,
  reviewsList: PropTypes.arrayOf(reviewTypes).isRequired,
};

const mapStateToProps = (state) => ({
  offersList: state.DATA.offersList,
  reviewsList: state.DATA.reviewsList,
  currentOffersList: filterOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
