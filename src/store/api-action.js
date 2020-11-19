import {ActionCreator} from './action';
import {AuthorizationStatus} from '../const';
import {adaptOfferToClient} from '../adapter';

const {loadOffers, requiredAuth, changeLogin} = ActionCreator;

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(data.map((item) => adaptOfferToClient(item)))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(requiredAuth(AuthorizationStatus.AUTH));
      dispatch(changeLogin(data.email));
    })
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => {
      dispatch(requiredAuth(AuthorizationStatus.AUTH));
      dispatch(changeLogin(data.email));
    })
);
