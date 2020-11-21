import {ActionTypes} from '../action';
import browserHistory from '../../browser-history';

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionTypes.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
