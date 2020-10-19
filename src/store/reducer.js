import {ActionTypes} from './action';
import {getOffer} from '../mocks/offers';
import {extend} from '../utils/store';
import {getArray} from '../utils/offers';
import {OFFERS_COUNT} from '../const';

const offers = getArray(OFFERS_COUNT, getOffer);

const initialState = {
  currentCity: `Amsterdam`,
  offersList: offers.filter((offer) => offer.location === `Amsterdam`)
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });
    case ActionTypes.GET_OFFERS:
      return state;
    default:
      return state;
  }
};
