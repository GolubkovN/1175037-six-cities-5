import {ActionTypes} from './action';
import {getOffer} from '../mocks/offers';
import {getReviews} from '../mocks/reviews';
import {extend} from '../utils/store';
import {OFFERS_COUNT, Locations} from '../const';
import {getArray, getRandomInteger} from '../utils/offers';

const REVIEW_COUNT = getRandomInteger(1, 3);

const offers = getArray(OFFERS_COUNT, getOffer);
const reviews = getArray(REVIEW_COUNT, getReviews);

const initialState = {
  currentCity: `Amsterdam`,
  citiesList: Locations,
  offersList: offers,
  currentOffersList: offers.filter(({location}) => location === `Amsterdam`),
  reviewsList: reviews
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
        currentOffersList: offers.filter(({location}) => location === action.payload)
      });
    default:
      return state;
  }
};
