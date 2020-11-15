import {ActionTypes} from '../../action';
import {getReviews} from '../../../mocks/reviews';
import {extend} from '../../../utils/store';
import {getArray, getRandomInteger} from '../../../utils/offers';


const REVIEW_COUNT = getRandomInteger(1, 3);

const reviews = getArray(REVIEW_COUNT, getReviews);

const iState = {
  offersList: [],
  reviewsList: reviews,
};

export const appData = (state = iState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_OFFERS:
      return extend(state, {
        offersList: action.payload
      });
    case ActionTypes.LOAD_REVIEWS:
      return extend(state, {
        reviewsList: action.payload,
      });
    default:
      return state;
  }
};
