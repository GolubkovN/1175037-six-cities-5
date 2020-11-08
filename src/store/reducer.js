import {ActionTypes} from './action';
import {getOffer} from '../mocks/offers';
import {getReviews} from '../mocks/reviews';
import {extend} from '../utils/store';
import {OFFERS_COUNT, Locations} from '../const';
import {getArray, getRandomInteger, sortOffers} from '../utils/offers';

const REVIEW_COUNT = getRandomInteger(1, 3);

const offers = getArray(OFFERS_COUNT, getOffer);
const reviews = getArray(REVIEW_COUNT, getReviews);

const initialState = {
  currentCity: `Amsterdam`,
  citiesList: Locations,
  offersList: offers,
  currentOffersList: offers.filter(({location}) => location === `Amsterdam`),
  reviewsList: reviews,
  currentSortType: `Popular`,
  sortIsOpen: false,
  activeItem: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
        currentOffersList: offers.filter(({location}) => location === action.payload)
      });
    case ActionTypes.CHANGE_SORT_TYPE:
      return extend(state, {
        currentSortType: action.payload,
        currentOffersList: sortOffers(action.payload, state.currentOffersList),
      });
    case ActionTypes.OPEN_SORT:
      return extend(state, {
        sortIsOpen: action.payload,
      });
    case ActionTypes.CHANGE_ACTIVE_ITEM:
      return extend(state, {
        activeItem: action.payload,
      });
    default:
      return state;
  }
};
