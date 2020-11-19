import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {filterOffers} from '../../store/reducers/app-process/selectors';

import {offerTypes} from '../../types';
import {TypeCards} from "../../const";

import Map from '../map/map';
import Sort from '../sort/sort';
import Filter from '../filter/filter';
import CardsList from '../cards-list/cards-list';

const MainWithOffers = ({currentOffersList, currentCity, citiesList, changeCity}) => {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <Filter currentCity={currentCity} cities={citiesList} changeCity={changeCity}/>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{currentOffersList.length} {currentOffersList.length > 1 ? `places` : `place`} to stay in {currentCity}</b>
            <Sort />
            <CardsList offers={currentOffersList} typeCard={TypeCards.CITIES} className={`cities__places-list`}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map offers={currentOffersList}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

MainWithOffers.propTypes = {
  currentOffersList: PropTypes.arrayOf(offerTypes),
  changeCity: PropTypes.func.isRequired,
  citiesList: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.PROCESS.currentCity,
  citiesList: state.PROCESS.citiesList,
  currentOffersList: filterOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {MainWithOffers};
export default connect(mapStateToProps, mapDispatchToProps)(MainWithOffers);
