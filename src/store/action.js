export const ActionTypes = {
  CHANGE_CITY: `CHANGE_CITY`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionTypes.CHANGE_CITY,
    payload: city,
  })
};
