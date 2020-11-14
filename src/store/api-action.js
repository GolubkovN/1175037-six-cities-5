import {ActionCreator} from './action';
import {AuthorizationStatus} from '../const';
// import {adaptOfferToClient} from '../adapter';

const {loadOffers, requiredAuth} = ActionCreator;

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requiredAuth(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);
