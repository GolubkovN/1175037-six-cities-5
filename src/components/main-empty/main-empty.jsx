import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

import Filter from '../filter/filter';

const MainEmpty = ({currentCity, citiesList, changeCity}) => {
  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <Filter currentCity={currentCity} cities={citiesList} changeCity={changeCity} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {currentCity}</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </main>
  );
};

MainEmpty.propTypes = {
  changeCity: PropTypes.func.isRequired,
  citiesList: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.PROCESS.currentCity,
  citiesList: state.PROCESS.citiesList,
  offersList: state.DATA.offersList,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainEmpty);
