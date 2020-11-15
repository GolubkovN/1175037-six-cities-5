import {ActionTypes} from '../../action';
import {extend} from '../../../utils/store';
import {Locations} from '../../../const';

const iState = {
  currentCity: `Amsterdam`,
  citiesList: Locations,
  currentSortType: `Popular`,
  sortIsOpen: false,
  activeItem: null,
};

export const appProcess = (state = iState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });
    case ActionTypes.CHANGE_SORT_TYPE:
      return extend(state, {
        currentSortType: action.payload,
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
