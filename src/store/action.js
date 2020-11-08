export const ActionTypes = {
  CHANGE_CITY: `CHANGE_CITY`,
  OPEN_SORT: `OPEN_SORT`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
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
};
