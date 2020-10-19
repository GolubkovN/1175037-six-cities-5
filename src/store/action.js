export const ActionTypes = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

export const ActionCreator = {
  changeCity: (evt) => ({
    type: ActionTypes.CHANGE_CITY,
    payload: evt.target.textContent,
  }),
  getOffers: () => ({
    type: ActionTypes.GET_OFFERS,
  })
};
