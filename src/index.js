import React from 'react';
import ReactDOM from 'react-dom';

import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createApi} from './services/api';
import {ActionCreator} from './store/action';
import {fetchOffers, checkAuth} from './store/api-action';
import RootReducer from './store/reducers';
import {redirect} from './store/middlewares/redirect';

import {AuthorizationStatus} from './const';
import App from './components/App/app';

const {requiredAuth} = ActionCreator;
const api = createApi(() => store.dispatch(requiredAuth(AuthorizationStatus.NO_AUTH)));

const store = createStore(
    RootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchOffers()),
  store.dispatch(checkAuth())
]).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
  );
});

