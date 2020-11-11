export const ActionTypes = {
  CHANGE_CITY: `CHANGE CITY`,
  OPEN_SORT: `OPEN SORT`,
  CHANGE_SORT_TYPE: `CHANGE SORT TYPE`,
  CHANGE_ACTIVE_ITEM: `CHANGE ACTIVE ITEM`,
  LOAD_OFFERS: `LOAD OFFERS`,
  LOAD_REVIEWS: `LOAD REVIEWS`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionTypes.CHANGE_CITY,
    payload: city,
  }),
  openSort: (open) => ({
    type: ActionTypes.OPEN_SORT,
    payload: open,
  }),
  changeSortType: (sortType, currentCity) => ({
    type: ActionTypes.CHANGE_SORT_TYPE,
    payload: sortType,
    currentCity,
  }),
  changeActiveItem: (activeItem) => ({
    type: ActionTypes.CHANGE_ACTIVE_ITEM,
    payload: activeItem,
  }),
  loadOffers: (offers) => ({
    type: ActionTypes.LOAD_OFFERS,
    payload: offers,
  }),
  loadReviews: (reviews) => ({
    type: ActionTypes.LOAD_REVIEWS,
    payload: reviews,
  })
};
