import PropTypes from 'prop-types';
import {TypeOfHousing} from '../const';

export const offerTypes = PropTypes.shape({
  id: PropTypes.string,
  location: PropTypes.string,
  coordinations: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number,
  }),
  picture: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
  isPremium: PropTypes.bool,
  isFavorite: PropTypes.bool,
  description: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  type: PropTypes.oneOf(Object.values(TypeOfHousing)),
  photos: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
  })),
  Bedrooms: PropTypes.number,
  guests: PropTypes.number,
  features: PropTypes.shape({
    Wifi: PropTypes.bool,
    Heating: PropTypes.bool,
    Kitchen: PropTypes.bool,
    CableTV: PropTypes.bool,
  }),
  owner: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isSuper: PropTypes.bool,
  }),
});

export const reviewTypes = PropTypes.shape({
  id: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
  date: PropTypes.date,
  text: PropTypes.string
});
