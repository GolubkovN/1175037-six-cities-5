import {createSelector} from 'reselect';
import {filterByLocation} from '../../utils/store';
import {sortOffers} from '../../utils/offers';

const getOffers = (state) => state.offersList;
const getCurrentCity = (state) => state.currentCity;
const getCurrentSortType = (state) => state.currentSortType;

export const filterOffers = createSelector([getOffers,
  getCurrentCity, getCurrentSortType], (offers, city, sortType) => {

  const filteredOffers = filterByLocation(offers, city);
  const sortedOffers = sortOffers(sortType, filteredOffers);

  return sortedOffers;
});
