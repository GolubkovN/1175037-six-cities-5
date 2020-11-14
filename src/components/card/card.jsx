import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {getRating} from '../../utils/offers';
import {offerTypes} from '../../types';
import {TypeCards} from "../../const";

const Card = ({onHover = () => {}, onMouseLeave = () => {}, offer, typeCard}) => {
  const {
    isPremium,
    picture,
    price,
    title,
    type,
    rating,
    isFavorite
  } = offer;

  const isFavoriteCard = TypeCards.FAVORITES === typeCard;

  const Premium = () => {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  };

  return (
    <article className={`${typeCard}card place-card`}
      onMouseEnter={() => {
        onHover(offer);
      }}
      onMouseLeave={onMouseLeave}
    >

      {isPremium && <Premium />}

      <div className={`${typeCard}image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={picture} width={`${isFavoriteCard ? `150` : `260`}`}
            height={`${isFavoriteCard ? `110` : `200`}`}
            alt=""
          />
        </Link>
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
  onHover: PropTypes.func,
  onMouseLeave: PropTypes.func,
  offer: offerTypes.isRequired,
  typeCard: PropTypes.oneOf(Object.values(TypeCards)),
};

export default Card;

