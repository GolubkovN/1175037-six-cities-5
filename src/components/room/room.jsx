import React from 'react';
import PropTypes from 'prop-types';

import {offerTypes, reviewTypes} from '../../types';
import {getRating} from '../../utils/offers';
import {TypeCards} from "../../const";

import Reviews from '../reviews/reviews';
import Header from '../header/header';
import CardsList from '../cards-list/cards-list';
import Map from '../map/map';

const Premium = () => {
  return (
    <div className="property__mark">
      <span>Premium</span>
    </div>
  );
};

const Room = ({routeProps, offers, reviews}) => {
  const offer = offers.find(({id}) => id === routeProps.match.params.id);
  const currentReviews = reviews.filter(({id}) => id === offer.id);

  const {
    isPremium,
    picture,
    price,
    title,
    type,
    rating,
    isFavorite,
    Bedrooms,
    guests,
    owner,
    description,
  } = offer;

  const {name, avatar} = owner;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.photos.map((photo, i) =>
                <div key={`photo-${i}`} className="property__image-wrapper">
                  <img className="property__image" src={photo.url} alt={picture.alt}/>
                </div>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">

              {isPremium && <Premium />}

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className={`property__bookmark-button ${isFavorite ? `property__bookmark-button--active` : ``} button`}
                  type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: getRating(rating)}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {Bedrooms} Bedroom{Bedrooms > 1 ? `s` : ``}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {guests} adult{guests > 1 ? `s` : ``}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">

                  {Object.keys(offer.features).map((feature, i) =>
                    <li key={`feature-${i}`} className="property__inside-item">
                      {feature}
                    </li>
                  )}

                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatar} width="74" height="74" alt={name}/>
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <Reviews reviews={currentReviews}/>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={offers}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardsList offers={offers} typeCard={TypeCards.NEAR_PLACES} className={`near-places__list`} />
          </section>
        </div>
      </main>
    </div>
  );
};

Room.propTypes = {
  offers: PropTypes.arrayOf(offerTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewTypes).isRequired,
  routeProps: PropTypes.object.isRequired,
};

export default Room;

