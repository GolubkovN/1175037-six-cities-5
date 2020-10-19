import {ActionTypes} from './action';
import {getOffer} from '../mocks/offers';
import {extend} from '../utils/store';
import {getArray} from '../utils/offers';
import {OFFERS_COUNT} from '../const';

const offers = getArray(OFFERS_COUNT, getOffer);

const initialState = {
  currentCity: `Paris`,
  offersList: offers.filter((offer) => offer.location === `Paris`)
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
        offersList: offers.filter((offer) => offer.location === action.payload),
      });
    case ActionTypes.GET_OFFERS:
      return state;
    default:
      return state;
  }
};
