import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {getOffersByLocation} from '../../utils/offers';
import {offerTypes} from '../../types';

import FavoriteCard from '../favorite-card/favorite-card';
import Header from '../header/header';
import FavoritesEmpty from '../favorites-empty/favorites-empty';

const Favorites = ({offers, onHover}) => {
  const groupedOffers = getOffersByLocation(offers);

  return (
    <div className="page">
      <Header />
      {
        Array.from(groupedOffers.keys()).length === 0
          ? <FavoritesEmpty />
          : <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {Array.from(groupedOffers.keys()).map((location, i) =>
                    <li key={`location-${i}`} className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link to="/" className="locations__item-link" href="#">
                            <span>{location.name}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {groupedOffers.get(location.name).map((offer, k) =>
                          <FavoriteCard key={`offer-${k}`} offer={offer} onHover={onHover} />
                        )}
                      </div>
                    </li>
                  )}
                </ul>
              </section>
            </div>
          </main>
      }
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(offerTypes).isRequired,
  onHover: PropTypes.func,
};

export default Favorites;
