import {createSelector} from 'reselect';
import {filterByLocation} from '../../../utils/store';
import {sortOffers} from '../../../utils/offers';

const getOffers = (state) => state.DATA.offersList;
const getCurrentCity = (state) => state.PROCESS.currentCity;
const getCurrentSortType = (state) => state.PROCESS.currentSortType;

export const filterOffers = createSelector([getOffers,
  getCurrentCity, getCurrentSortType], (offers, city, sortType) => {

  const filteredOffers = filterByLocation(offers, city);
  const sortedOffers = sortOffers(sortType, filteredOffers);

  return sortedOffers;
});
