import React from 'react';
import PropTypes from 'prop-types';

import {getRating} from '../../utils/offers';
import {offerTypes} from '../../types';

const Card = ({onHover, offer}) => {
  const {isPremium, picture, price, title, type, rating, isFavorite} = offer;
  const {alt, src} = picture;
  return (
    <article className="cities__place-card place-card"
      onMouseOver={(evt) => {
        evt.preventDefault();
        onHover(offer);
      }}
    >

      {isPremium
        ? <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ``}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={src} width="260" height="200" alt={alt}/>
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${isFavorite ? `place-card__bookmark-button--active` : `place-card__bookmark-button`} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  onHover: PropTypes.func.isRequired,
  offer: offerTypes.isRequired,
};

export default Card;

