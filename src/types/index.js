import PropTypes from 'prop-types';
// import {TypeOfHousing} from '../const';

export const offerTypes = PropTypes.shape({
  id: PropTypes.any,
  location: PropTypes.shape({
    name: PropTypes.string,
    coords: PropTypes.shape({
      lat: PropTypes.number,
      lon: PropTypes.number,
      zoom: PropTypes.number,
    })
  }),
  coordinations: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number,
  }),
  picture: PropTypes.string,
  isPremium: PropTypes.bool,
  isFavorite: PropTypes.bool,
  description: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  type: PropTypes.string,
  photos: PropTypes.array,
  bedrooms: PropTypes.number,
  guests: PropTypes.number,
  features: PropTypes.array,
  owner: PropTypes.shape({
    id: PropTypes.number,
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
