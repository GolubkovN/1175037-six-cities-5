import PropTypes from 'prop-types';
import {TypeOfHousing} from '../const';

export const offerTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  picture: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.oneOf(Object.values(TypeOfHousing)).isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })).isRequired,
  Bedrooms: PropTypes.number.isRequired,
  guests: PropTypes.number.isRequired,
  features: PropTypes.shape({
    Wifi: PropTypes.bool.isRequired,
    Heating: PropTypes.bool.isRequired,
    Kitchen: PropTypes.bool.isRequired,
    CableTV: PropTypes.bool.isRequired,
  }).isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired,
  }).isRequired,
});
